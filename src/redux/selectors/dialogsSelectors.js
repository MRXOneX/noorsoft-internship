import { useSelector } from "react-redux";

export const useDataDialogsGetStartSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsGetStart);

export const useDataDialogsActiveSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsActive);

export const useDataDialogsSavedSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsSaved);

export const useDataDialogsComplectedSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsComplected);
