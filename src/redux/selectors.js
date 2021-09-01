import { useSelector } from "react-redux";

//----------------------Authorization----------------------//

export const useLoginEmailSelector = () =>
  useSelector(({ login }) => login.loginEmail);

export const useUserSelector = () => useSelector(({ auth }) => auth.user);

export const useRegistrationSelector = () =>
  useSelector(({ registration }) => registration.registration);

//----------------------mainReducer----------------------//

export const useVisiblePopup = () =>
  useSelector(({ main }) => main.visiblePopup);

export const useActiveInputSearch = () =>
  useSelector(({ main }) => main.activeInputSearch);

export const useInputValueSearch = () =>
  useSelector(({ main }) => main.inputValueSearch);

//----------------------dialogsReducer----------------------//

export const useDataDialogsGetStart = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsGetStart);

export const useDataDialogsActive = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsActive);

export const useDataDialogsSaved = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsSaved);

export const useDataDialogsComplected = () =>
  useSelector(({ dialogs }) => dialogs.dataDialogsComplected);

//----------------------dialogReducer----------------------//

export const useDialog = () => useSelector(({ dialog }) => dialog.dialog);
