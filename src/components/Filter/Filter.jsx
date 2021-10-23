import PropTypes from "prop-types";
import s from "./Filter.module.css";

export default function Filter({filter, onFilterChange}) {
  return (

      <label>Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onFilterChange}
        ></input>
        </label>

  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};