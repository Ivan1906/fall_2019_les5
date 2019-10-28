import React, { useState, useEffect } from "react";
import Input from "../shared/Input";
import LocalStorage from "../../LocalStorage/LocalStorage";
import ListItem from "../shared/ListItem";

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [localStorage, setLS] = useState(new LocalStorage());

  useEffect(() => {
    setItems([...items, ...localStorage.getItems()]);

    return () => {
      localStorage.save(items);
    };
  }, []);

  const keyUpHandle = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      let todo = localStorage.addItem(e.target.value);
      setItems([...items, todo]);
    }
  };

  return (
    <div className="reviews">
      <h1>Welcome to Reviews</h1>
      <Input type="text" placeholder="Enter text todo" onKeyUp={keyUpHandle} />
      <ListItem items={items} />
    </div>
  );
};

export default Reviews;
