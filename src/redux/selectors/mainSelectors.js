import { useSelector } from "react-redux";

export const useVisiblePopupSelector = () =>
  useSelector(({ main }) => main.visiblePopup);

export const useActiveInputSearchSelector = () =>
  useSelector(({ main }) => main.activeInputSearch);

export const useInputValueSearchSelector = () =>
  useSelector(({ main }) => main.inputValueSearch);
