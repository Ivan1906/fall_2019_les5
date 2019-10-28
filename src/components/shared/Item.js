import React from "react";
import { Link } from "react-router-dom";
import T from "prop-types";
import { reviewId } from "../../routers/routers";

const comparse = (prevProps, nextProps) => {
  return prevProps.id !== nextProps.id && prevProps.text !== nextProps.text;
};

const Item = ({ item }) => (
  <li id={item.id}>
    <Link
      to={{
        pathname: reviewId.replace(":reviewId", item.id),
        state: {
          hideNav: true
        }
      }}
    >
      {item.text}
    </Link>
  </li>
);

Item.defaulProps = {
  item: {
    id: "0",
    text: "Default text"
  }
};

Item.displayName = "Item";

Item.propTypes = {
  item: T.shape({
    id: T.string,
    text: T.string
  }).isRequired
};

export default React.memo(Item, comparse);
