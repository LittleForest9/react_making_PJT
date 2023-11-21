import React, { useState } from "react";

const Input2 = () => {
  const [inputs, seteInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs;

  const onChangefuc = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    seteInputs({
      ...inputs,
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChangefuc} />
      </div>
      <div>
        <label>이메일</label>
        <input type="text" id="email" value={email} onChange={onChangefuc} />
      </div>
      <div>
        <label>핸드폰 번호</label>
        <input type="text" id="tel" value={tel} onChange={onChangefuc} />
      </div>
      <p>name = {name}</p>
      <p>email = {email}</p>
      <p>tel = {tel}</p>
    </div>
  );
};

export default Input2;
