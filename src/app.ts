import { history, RequestConfig } from 'umi';
import { fetchUserInfo } from '@/services/user';
import { getStorage } from '@/utils/storage';

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
