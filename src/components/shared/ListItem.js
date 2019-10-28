import React from "react";
import T from "prop-types";
import Item from "./Item";

const ListItem = ({ items }) => (
  <ul>
    {items.map(item => (
      <Item key={item.id} item={item} />
    ))}
  </ul>
);

ListItem.defaulProps = {
  items: [],
  onClick: () => console.log("Function 'onClick'!")
};

ListItem.displayName = "Item";

ListItem.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string,
      text: T.string
    })
  ).isRequired,
  onClick: T.func
};

export default ListItem;
