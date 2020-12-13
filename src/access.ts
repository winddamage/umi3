import { InitialState } from 'umi';

export default function(initialState: InitialState) {
  const { roles } = initialState;

  return {
    canAdmin: roles.includes('admin') ? true : false,
  };
}
