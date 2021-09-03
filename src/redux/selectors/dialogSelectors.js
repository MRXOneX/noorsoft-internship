import { useSelector } from "react-redux";

export const useDialogSelector = () =>
  useSelector(({ dialog }) => dialog.dialog);
