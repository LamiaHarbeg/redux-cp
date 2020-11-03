import React, { useState } from "react";
import {  Modal, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editItem } from "../JS/Actions/ActionTask";
import {FiEdit, FiSave} from "react-icons/fi"
import {FaRegWindowClose} from "react-icons/fa"



const EditTask = ({ item }) => {
  const [show, setShow] = useState(false);
  const [Myinput, setMyinput] = useState(item.description);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => setMyinput(e.target.value);

  const edit = () => {
    dispatch(editItem({ id: item.id, description: Myinput }));
  };

  return (
    <>
      <FiEdit  style={{color:"#17a2b8"}} onClick={handleShow}/>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
              <Modal.Body>
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={Myinput}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
        
            <FaRegWindowClose 
            style={{color:"black"}}
            onClick={() => {
              handleClose();
              setMyinput(item.description);
            }}/>
                     <FiSave 
                     style={{color:"#17a2b8"}}
            onClick={() => {
              handleClose();
              edit();
            }}/>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;