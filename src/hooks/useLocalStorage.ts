"use client";

import { useEffect, useState } from "react";

/**
 * Hook lưu state vào localStorage, tự đồng bộ giữa các lần render.
 * An toàn với SSR (không đọc localStorage trong lần render đầu trên server).
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) {
        setValue(JSON.parse(stored));
      }
    } catch (error) {
      console.warn(`Không đọc được localStorage key "${key}":`, error);
    } finally {
      setIsHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Không ghi được localStorage key "${key}":`, error);
    }
  }, [key, value, isHydrated]);

  return [value, setValue] as const;
}
