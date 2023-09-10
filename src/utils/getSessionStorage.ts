const getSessionStorage = (key: string, defaultValue: string) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
};

export { getSessionStorage };
