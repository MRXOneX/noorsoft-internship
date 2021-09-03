import { useEffect } from "react";

const useHandleOutsideClick = (ref, func) => {
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
export default useHandleOutsideClick;
