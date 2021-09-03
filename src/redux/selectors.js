import { useSelector } from "react-redux";

//----------------------Authorization----------------------//

export const useLoginEmailSelector = () =>
  useSelector(({ login }) => login.loginEmail);

export const useUserSelector = () => useSelector(({ auth }) => auth.user);

export const useRegistrationSelector = () =>
  useSelector(({ registration }) => registration.registration);

//----------------------mainReducer----------------------//

export const useVisiblePopupSelector = () =>
  useSelector(({ main }) => main.visiblePopup);

export const useActiveInputSearchSelector = () =>
  useSelector(({ main }) => main.activeInputSearch);

export const useInputValueSearchSelector = () =>
  useSelector(({ main }) => main.inputValueSearch);

//----------------------dialogsReducer----------------------//

export const useDataDialogsGetStartSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsGetStart);

export const useDataDialogsActiveSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsActive);

export const useDataDialogsSavedSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsSaved);

export const useDataDialogsComplectedSelector = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsComplected);

//----------------------dialogReducer----------------------//

export const useDialogSelector = () =>
  useSelector(({ dialog }) => dialog.dialog);
