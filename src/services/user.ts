import { request } from 'umi';

interface loginData {
  username: string;
  password: string;
}

export const login = (data: loginData) => {
  return request('/api/user/login', {
    method: 'post',
    data,
  });
};

export const fetchUserInfo = () => {
  return request('/api/user/userInfo');
};

export const fetchRoutes = () => request('/api/user/routes');
