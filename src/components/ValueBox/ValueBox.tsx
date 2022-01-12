import React, { FC } from "react";

const ValueBox: FC<{
  value: string;
  onClick: () => void;
  onDelete: () => void;
}> = ({ value, onClick, onDelete }) => {
  return (
    <div>
      <button type="button" onClick={onClick}>
        {value}
      </button>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </div>
  );
};

export default ValueBox;
