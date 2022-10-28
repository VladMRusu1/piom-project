import React, { useEffect, useState } from "react";
import { mockItems } from "../../mockData";

const Children = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const addHandler = () => {
    if (text !== "") setItems([...items, text]);
    setText("");
  };

  const handleRemove = (index) => {
    const itemsArray = [...items];
    itemsArray.splice(index, 1);
    setItems(itemsArray);
  };

  useEffect(() => {
    setItems(mockItems);
  }, []);

  return (
    <div>
      <div>
        <input
          onChange={(event) => onChange(event)}
          placeholder="Shop List"
          value={text}
        />
        <button onClick={addHandler}>Add new item</button>
      </div>
      <div>
        <p>List of items</p>
        <div>
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} style={{ display: "flex", gap: "30px" }}>
                <p>{item}</p>
                <button onClick={() => handleRemove(index)}>
                  <p>X</p>
                </button>
              </div>
            ))
          ) : (
            <p>Empty list</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Children;
