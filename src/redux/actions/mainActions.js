import {
  SET_ACTIVE_INPUT_SEARCH,
  SET_INPUT_VALUE_SEARCH,
  SET_VISIBLE_POPUP,
} from "../constans/mainConstans";

export const mainActions = {
  setVisiblePopup: (payload) => ({ type: SET_VISIBLE_POPUP, payload }),
  setActiveInputSearch: (payload) => ({
    type: SET_ACTIVE_INPUT_SEARCH,
    payload,
  }),
  setInputValueSearch: (payload) => ({ type: SET_INPUT_VALUE_SEARCH, payload }),
};
