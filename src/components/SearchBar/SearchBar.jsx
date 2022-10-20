import cn from "classnames";
import Select from "react-select";

import styles from "./SearchBar.module.css";
import Search from "../../assets/icon-search-bar.svg";
import Filter from "../../assets/icon-filter.svg";
import { useState } from "react";

const options = [
  { value: "Carros", label: "Carros" },
  { value: "Motos", label: "Motos" },
  { value: "Ropa", label: "Ropa" },
  { value: "Deporte", label: "Deporte" },
  { value: "Muebles", label: "Muebles" },
  { value: "Computadores", label: "Computadores" },
  { value: "Celulares", label: "Celulares" },
  { value: "TV, Audio y foto", label: "TV, Audio y foto" },
  { value: "Electrodomésticos", label: "Electrodomésticos" },
];

function SearchBar({ onSearch: handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSearch = () => {
    handleSearch(inputValue);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && inputValue !== "") {
      onSearch();
    }
  };

  return (
    <div className={styles.search_box}>
      <div className={styles.search_bar}>
        <img
          className={styles.search_icon}
          src={Search}
          alt="Icono de buscar"
        ></img>
        <input
          className={styles.search_input}
          placeholder="Estoy buscando..."
          onChange={onChange}
          onKeyDown={handleEnter}
        ></input>
        <Select
          options={options}
          className={cn("select", styles.select)}
          classNamePrefix="react-select"
          isSearchable={false}
          placeholder="Todas las categorías"
          components={{ IndicatorSeparator: null }}
          data-testid="select-element"
        />
      </div>

      <button
        className={styles.search_button}
        onClick={onSearch}
        data-testid="search-element"
      >
        Buscar
      </button>
      <div className={styles.filter}>
        <img src={Filter} alt="Icono de filtro"></img>
        <button className={styles.filter_button}>Filtros</button>
      </div>
    </div>
  );
}

export default SearchBar;
