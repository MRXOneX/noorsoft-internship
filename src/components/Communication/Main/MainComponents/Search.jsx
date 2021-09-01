import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

import {
  useActiveInputSearch,
  useInputValueSearch,
} from "../../../../redux/selectors";

import styles from "../Main.module.css";
import { mainActions } from "../../../../redux/actions/mainActions";
import { useDispatch } from "react-redux";
import { useHandleOutSideClick } from "../../../utils/handleOutSideClick";

const Search = () => {
  const dispatch = useDispatch();
  const activeSearchInput = useActiveInputSearch();
  const inputValueSearch = useInputValueSearch();

  const setActiveInputSearch = (value) => {
    dispatch(mainActions.setActiveInputSearch(value));
  };

  const activeInputSearchRef = useRef(null);
  useHandleOutSideClick(activeInputSearchRef, setActiveInputSearch);

  const onChangeInputValueSearch = (e) => {
    dispatch(mainActions.setInputValueSearch(e.target.value));
  };

  return (
    <div
      ref={activeInputSearchRef}
      onClick={() => setActiveInputSearch(true)}
      className={`${activeSearchInput ? styles.opacity1 : styles.opacity7} ${
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
