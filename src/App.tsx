import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;

    setValue(value); // type: string
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello " + value + " !");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>LOG IN</button>
      </form>
    </div>
  );
}

export default App;
