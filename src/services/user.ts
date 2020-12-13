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
