import cn from "classnames";

import styles from "./Spinner.module.css";

function Spinner({ white }) {
  return <div class={cn(styles.spinner, { [styles.white]: white })}></div>;
}

export default Spinner;
