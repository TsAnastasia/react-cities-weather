import React, { FC } from "react";
import styles from "./valueBox.module.scss";

const ValueBox: FC<{
  value: string;
  onClick: () => void;
  onDelete: () => void;
}> = ({ value, onClick, onDelete }) => {
  return (
    <div className={styles.box}>
      <button type="button" onClick={onClick} className={styles.value}>
        {value}
      </button>
      <button type="button" onClick={onDelete} className={styles.delete} />
    </div>
  );
};

export default ValueBox;
