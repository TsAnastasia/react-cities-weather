import React, { FC } from "react";

const ValueBox: FC<{
  value: string;
  onDelete: () => void;
}> = ({ value, onDelete }) => {
  return (
    <div>
      <p>{value}</p>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </div>
  );
};

export default ValueBox;
