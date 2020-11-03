import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form,Button, InputGroup, FormControl } from "react-bootstrap";
import { addItem} from "../JS/Actions/ActionTask";
import {MdAddToPhotos} from "react-icons/md"

const AddTask = ({handelFilter, filter}) => {
  const [Grabbedvalue, setGrabbedvalue] = useState("");

  const handlChange = (e) => {
    setGrabbedvalue(e.target.value);
  };

  const dispatch = useDispatch();
  const addNewItem = (e) => {
    e.preventDefault();
    if (Grabbedvalue) {
      dispatch(
        addItem({
          id: Date.now(),
          description: Grabbedvalue,
          isDone: false,
        })
      );
      setGrabbedvalue("");
    } else alert("Please enter a Task");
  };


  return (
    <Card  >
      <Card.Body >
        <h1>To Do List </h1>
                <Form onSubmit={addNewItem} style={{display:"flex",justifyContent:"center" ,margin:"auto"}}>
          <Form.Group>
            <InputGroup   className="mb-3">
              <FormControl  placeholder="What needs to be done?"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={Grabbedvalue}
                onChange={handlChange}
              />
            </InputGroup>
          </Form.Group>
            < MdAddToPhotos style={{color:" #73204f", marginLeft:"20px", width:"50px", height:"40px"}} variant="success" onClick={addNewItem}/>
        </Form>
        <Button variant="info" className="mr-3"  onClick={handelFilter}>{filter?"All":"COMPLETED"}</Button>
      </Card.Body>
    </Card>
  );
};

export default AddTask;