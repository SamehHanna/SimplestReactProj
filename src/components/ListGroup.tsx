import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // return a function to show what is selected (item:string) => void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   items = [];
  //Hook
  const [selectedItem, setSelectedItem] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? (
      <h1>
        <p> No items found</p>
      </h1>
    ) : (
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <>
      <h1> {heading} </h1>
      {/* {items.length === 0 && <p> No items found</p>} */}
      {getMessage()}
    </>
  );
}

export default ListGroup;
