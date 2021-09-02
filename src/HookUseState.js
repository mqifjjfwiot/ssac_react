import { useState } from 'react';

function HookUseState() {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
  };

  const sub = () => {
    setValue(value - 1);
  };

  return (
    <>
      <div>
        <div>{value}</div>
        <button type="button" onClick={add}>
          add
        </button>
        <button type="button" onClick={sub}>
          sub
        </button>
      </div>
      <div>
        <input type="text" />
        <button type="button">print</button>
      </div>
    </>
  );
}

export default HookUseState;
