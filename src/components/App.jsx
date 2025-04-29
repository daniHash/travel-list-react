import { useState } from "react";
import Logo from "./logo";
import Stats from "./stats";
import Form from "./form";
import Packing from "./packinglist";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleCompleteItem = (id) => {
    items.some((item) => {
      item.id === id && (item.packed = !item.packed);
    });
    setItems((items) => [...items]);

    // setItems((items) =>
    //   items.map((item) => {
    //     item.id === id ? { ...item, packed: !item.packed } : item;
    //   })
    // );
  };
  const handleClearList = () => {
    items.length && confirm("Are you sure clear all?") && setItems(() => []);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Packing
        items={items}
        onDeleteItem={handleDeleteItem}
        onCompleteItem={handleCompleteItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};
export default App;
