import { useSelector } from "react-redux";

export const useLoginEmailSelector = () => useSelector(({ login }) => login);

export const useUserSelector = () => useSelector(({ auth }) => auth.user);

export const useRegistrationSelector = () =>
  useSelector(({ registration }) => registration);
