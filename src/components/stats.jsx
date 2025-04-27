const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding items to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  console.log(numPackedItems);
  const percentItems = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentItems === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list and you already packed
          ${numPackedItems} (${percentItems}%)`}
      </em>
    </footer>
  );
};

export default Stats;
