import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import AddItems from "./AddTask";
import ListTasks from "./ListTasks";

const TodoList = () => {
  const [filter, setfilter] = useState(false);

  const handelFilter = () => setfilter(!filter);

  const Items = useSelector((state) => state);
  return (
    <Container>
      <AddItems handelFilter={handelFilter} filter={filter} />
      <ListTasks Items={filter?Items.filter(el=>el.isDone):Items}/>
    </Container>
  );
};

export default TodoList;