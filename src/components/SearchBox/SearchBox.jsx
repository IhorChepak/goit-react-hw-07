import { useDispatch } from "react-redux";
import s from "./searchbox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.box}>
      <p>Find contact by name</p>
      <input
        type="text"
        className={s.input}
        placeholder="What name do you want to find?"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;