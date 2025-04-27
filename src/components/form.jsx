import { useState } from "react";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  const handleSubmiting = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, count, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log(newItem);
    setCount(() => 1);
    setDescription(() => "");
  };
  return (
    <form action="" className="add-form" onSubmit={handleSubmiting}>
      <h3>What do you need for your trip?</h3>
      <select
        name=""
        id=""
        value={count}
        onChange={(e) => setCount(() => +e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((ind) => {
          return (
            <option value={ind} key={ind}>
              {ind}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        name=""
        placeholder="items..."
        id=""
        value={description}
        onChange={(e) => {
          setDescription(() => {
            return e.target.value;
          });
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
