import { useSelector } from "react-redux";

//----------------------Authorization----------------------//

export const useLoginEmailSelector = () =>
  useSelector(({ login }) => login.loginEmail);

export const useUserSelector = () => useSelector(({ auth }) => auth.user);

export const useRegistrationSelector = () =>
  useSelector(({ registration }) => registration.registration);

//----------------------Main----------------------//

export const useVisiblePopup = () =>
  useSelector(({ main }) => main.visiblePopup);

export const useActiveInputSearch = () =>
  useSelector(({ main }) => main.activeInputSearch);

export const useInputValueSearch = () =>
  useSelector(({ main }) => main.inputValueSearch);
