import React from "react";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import EditItem from "./EditTask";
import { deleteItem, completeItem } from "../JS/Actions/ActionTask";
import {GoTrashcan} from "react-icons/go"

const ListTasks = ({ Items }) => {
  const dispatch = useDispatch();
  if (Items.length > 0) {
  return (
    <ListGroup>
                {Items.map((item, key) => (
        <ListGroup.Item
          key={key}
          style={{ display: "flex", alignItems: "flex-end" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
          <p   onClick={() => dispatch(completeItem(item.id))} style={{ textDecoration: item.isDone ? 'line-through' : 'none'}} className={item.isDone ? "checked" : ""}>
            {item.description}
          </p>
                         <GoTrashcan style={{color:"red"}} onClick={() => dispatch(deleteItem(item.id))}/>
           <EditItem item={item} />
              </div>
        </ListGroup.Item>
      ))}
    
    </ListGroup>
  );
          } else {
           return <h2 >No TODOs</h2>	
          }
};

export default ListTasks;