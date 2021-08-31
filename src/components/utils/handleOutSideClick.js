import { useEffect } from "react";

export const useHandleOutSideClick = (ref, func) => {
  const outSideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(ref.current)) {
      func(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", outSideClick);

    return () => {
      document.removeEventListener("click", outSideClick);
    };
  }, []);
};
