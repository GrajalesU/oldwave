import cn from "classnames";
import Select from "react-select";

import styles from "./SearchBar.module.css";
import Search from "../../assets/icon-search-bar.svg";
import ArrowUp from "../../assets/Icon-arrow-up.svg";
import Filter from "../../assets/icon-filter.svg";

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

function SearchBar() {
  return (
    <div className={styles.search_box}>
      <div className={styles.search_bar}>
        <img
          className={styles.search_icon}
          src={Search}
          alt="Icono buscar"
        ></img>
        <input
          className={styles.search_input}
          placeholder="Estoy buscando..."
        ></input>
        {/* <span className={styles.search_categories}>Todas las categorías</span>
        <span>
          <img
            className={styles.search_arrow_up}
            src={ArrowUp}
            alt="Boton para desplegar las categorias"
          ></img>
        </span> */}
        <Select
          options={options}
          className={cn("select", styles.select)}
          classNamePrefix="react-select"
          isSearchable={false}
          placeholder="Todas las categorías"
          components={{ IndicatorSeparator: null }}
        />
      </div>

      <button className={styles.search_button}>Buscar</button>
      <div className={styles.filter}>
        <img src={Filter} alt="Icono de filtro"></img>
        <button>Filtros</button>
      </div>
    </div>
  );
}

export default SearchBar;
