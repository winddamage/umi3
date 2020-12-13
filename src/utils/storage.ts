const storage = window.localStorage;

export const setStorage = (key: string, value: any) => {
  storage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string) => {
  const item = storage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeStorage = (key: string) => {
  storage.removeItem(key);
};

export const clearStorage = () => {
  storage.clear();
};
