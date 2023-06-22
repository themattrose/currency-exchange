import { LocalStorageKey } from "@/@enums/localStorage";

export const setLocalStorage = <T extends object>(
  key: LocalStorageKey,
  data: T
) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getLocalStorage = <T>(key: LocalStorageKey): T | null => {
  if (typeof window !== "undefined") {
    const conversionsStorage = localStorage.getItem(key);
    if (!conversionsStorage) {
      return null;
    }

    return JSON.parse(conversionsStorage);
  }

  return null;
};
