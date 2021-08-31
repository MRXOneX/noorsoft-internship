import {
  FETCH_OUT_FAILURE,
  FETCH_OUT_REQUEST,
  FETCH_OUT_SUCCESS,
} from "../../constans/authorizationConstans/signOutConstans";

export const signOutActions = {
  signOutSRequest: () => ({ type: FETCH_OUT_REQUEST }),
  signOutSuccess: () => ({ type: FETCH_OUT_SUCCESS }),
  signOutFailure: (error) => ({ type: FETCH_OUT_FAILURE, error }),
};
