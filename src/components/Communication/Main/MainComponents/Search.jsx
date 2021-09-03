import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch } from "react-redux";
import { useRef } from "react";

import {
  useActiveInputSearchSelector,
  useInputValueSearchSelector,
} from "../../../../redux/selectors/mainSelectors";

import { mainActions } from "../../../../redux/actions/mainActions/mainActions";

import useHandleOutsideClick from "../../../utils/handleOutsideClick";

import styles from "../Main.module.css";

const Search = () => {
  const dispatch = useDispatch();

  const activeSearchInput = useActiveInputSearchSelector();
  const inputValueSearch = useInputValueSearchSelector();

  const setActiveInputSearch = (value) => {
    dispatch(mainActions.setActiveInputSearch(value));
  };

  const activeInputSearchRef = useRef(null);
  useHandleOutsideClick(activeInputSearchRef, setActiveInputSearch);

  const onChangeInputValueSearch = (e) => {
    dispatch(mainActions.setInputValueSearch(e.target.value));
  };

  return (
    <div
      ref={activeInputSearchRef}
      onClick={() => setActiveInputSearch(true)}
      className={`${activeSearchInput ? styles.active : styles.noActive} ${
        styles.search
      }`}
    >
      <FontAwesomeIcon icon={["fas", "search"]} />
      <input
        placeholder="Поиск здесь..."
        type="text"
        value={inputValueSearch}
        onChange={onChangeInputValueSearch}
      />
      {activeSearchInput && (
        <FontAwesomeIcon
          onClick={() => dispatch(mainActions.setInputValueSearch(""))}
          style={{ cursor: "pointer", marginLeft: "4px" }}
          icon={["fas", "times"]}
        />
      )}
    </div>
  );
};
export default Search;
