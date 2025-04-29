import { useState } from "react";
import Item from "./item";
const PackingList = ({ items, onDeleteItem, onCompleteItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  localStorage.setItem("items", JSON.stringify(items));
  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case "packed":
      sortedItems = [...items].sort((a, b) => +a.packed - +b.packed);
      break;
  }
  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onCompleteItem={onCompleteItem}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          name=""
          value={sortBy}
          className="actions"
          id=""
          onChange={(e) => setSortBy(() => e.target.value)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
