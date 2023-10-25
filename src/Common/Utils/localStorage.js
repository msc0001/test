export const saveValue = (key, value) => window.localStorage.setItem(key, value);

export const clearValue = (key) => window.localStorage.removeItem(key);

export const getValue = (key) => window.localStorage.getItem(key);