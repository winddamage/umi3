import { history, RequestConfig } from 'umi';
// import {
//   BasicLayoutProps,
//   Settings as LayoutSettings,
// } from '@ant-design/pro-layout';
import { fetchUserInfo, fetchRoutes } from '@/services/user';
import { getStorage, setStorage } from '@/utils/storage';
// import RightContent from '@/components/RightContent'

const initialState = {
  isLogin: false,
  roles: [],
};

const {
  location: { pathname },
} = history;

const token = getStorage('token');
interface Menu {
  name?: string;
  icon?: string;
}
interface Route {
  path: string;
  exact?: boolean;
  redirect?: string;
  component?: string;
  menu?: Menu;
  routes?: Route[];
  children?: Route[];
}

let serverRoutes: Route[] = [];

export function patchRoutes({ routes }: { routes: Route[] }) {
  console.log('patchRoutes: ', serverRoutes);
  routes.forEach((route: Route) => {
    serverRoutes.map((sR: Route) => {
      if (
        route.path === sR.path &&
        route.routes &&
        sR.children &&
        sR.children.length
      ) {
        sR.children.map(item => {
          if (item.redirect) {
            route.routes &&
              route.routes.unshift({
                ...item,
                exact: true,
              });
          } else {
            route.routes &&
              route.routes.unshift({
                ...item,
                component: require(`./pages/${item.component}`).default,
              });
          }
        });
      }
    });
  });

  routes.unshift({
    path: '/login',
    exact: true,
    component: require('@/pages/login/index').default,
  });
}

export async function render(oldRender: any) {
  const { code, data } = await fetchRoutes();
  if (code !== 200 && pathname !== '/login') {
    history.push('/login');
  } else {
    if (data.serverRoutes && data.serverRoutes.length) {
      setStorage('serverRoutes', data.serverRoutes);
      serverRoutes = data.serverRoutes;
    }
  }
  oldRender();
}

export async function getInitialState() {
  if (pathname !== '/login') {
    const { code, data } = await fetchUserInfo();
    if (code !== 200) return;
    const { roles } = data;
    return {
      ...initialState,
      roles: [...roles],
    };
  }
}

export const request: RequestConfig = {
  headers: {
    Authention: token ? `${token}` : '',
  },
};

// export const layout = ({
//   initialState,
// }: {
//   initialState: { settings?: LayoutSettings; currentUser?: API.CurrentUser };
// }): BasicLayoutProps => {
//   return {
//     rightContentRender: () => <RightContent />,
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { currentUser } = initialState;
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!currentUser && location.pathname !== '/user/login') {
//         history.push('/user/login');
//       }
//     },
//     menuHeaderRender: undefined,
//     ...initialState?.settings,
//   };
// };
