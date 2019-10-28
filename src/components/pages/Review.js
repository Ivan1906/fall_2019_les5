import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Input from "../shared/Input";
import LocalStorage from "../../LocalStorage/LocalStorage";
import { routers } from "../../routers/routers";

const Review = () => {
  const params = useParams();
  const history = useHistory();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    let localStorage = new LocalStorage();
    let searchTodo = localStorage.getItemById(params.reviewId);
    Boolean(searchTodo)
      ? setTodo({ ...todo, ...searchTodo })
      : setTodo({ ...todo, id: params.reviewId, text: "Not found element" });
  }, []);

  const clickHandle = e => {
    e.preventDefault();
    history.push(routers.reviews);
  };

  return (
    <div>
      <p>
        <b>Text todo:&nbsp;</b>
        <br />
        <span>
          <u>{todo.text}</u> for todo with params id="<i>{todo.id}</i>"
        </span>
      </p>
      <Input type="button" value="Back" onClick={clickHandle} />
    </div>
  );
};

export default Review;
