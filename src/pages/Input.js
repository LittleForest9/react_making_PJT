import React, { useState } from "react";

const Input = () => {
  const [txtValue, setTextValue] = useState(0);

  const onChangefuc = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChangefuc} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
