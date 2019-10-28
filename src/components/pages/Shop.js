import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Input from "../shared/Input";
import { modalRoute } from "../../routers/routers";

const ShopPage = () => {
  let location = useLocation();
  let history = useHistory();

  const clickHandle = e => {
    e.stopPropagation();
    history.push({
      pathname: modalRoute,
      state: {
        prevLocation: location
      }
    });
  };

  return (
    <div>
      <h1>Welcome to Shop</h1>
      <Input type="button" value="Buy" onClick={clickHandle} />
    </div>
  );
};

export default ShopPage;
