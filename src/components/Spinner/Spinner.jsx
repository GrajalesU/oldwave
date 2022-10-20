import cn from "classnames";

import styles from "./Spinner.module.css";

function Spinner({ white }) {
  return (
    <div
      data-testid="spinner-element"
      className={cn(styles.spinner, { [styles.white]: white })}
    ></div>
  );
}

export default Spinner;
