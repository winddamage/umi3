import { history, RequestConfig } from 'umi';
// import {
//   BasicLayoutProps,
//   Settings as LayoutSettings,
// } from '@ant-design/pro-layout';
import { fetchUserInfo } from '@/services/user';
import { getStorage } from '@/utils/storage';
// import RightContent from '@/components/RightContent'

const initialState = {
  isLogin: false,
  roles: [],
};

const {
  location: { pathname },
} = history;

const token = getStorage('token');

export function patchRoutes({ routes }) {
  routes.unshift({
    path: '/login',
    exact: true,
    component: require('@/pages/login/index').default,
  });
}

export async function getInitialState() {
  if (pathname !== '/login') {
    const data = await fetchUserInfo();
  }

  return {
    ...initialState,
  };
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
