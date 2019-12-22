import React, { useState,useEffect } from 'react';
import home from './home.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link} from 'react-router-dom';
const Register = (props) => {
  const {
    className
  } = props;

  const [modal, setModal,toggle] = useState(false);
  

  useEffect(() => {
       const toggle = setModal(!modal);
  },[]);
  

  return (
    <div className="reg">
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Sign up Form</ModalHeader>
        <ModalBody>
        <label for="usr">Name *</label>
         <input type="text" class="form-control" name="name"/><br/>
         <label for="usr">mobile number *</label>
         <input type="number" class="form-control" name="number"/>
         <label for="usr">Email id (optional)</label>
         <input type="number" class="form-control" name="number"/>
         <label for="usr">password *</label>
         <input type="password" class="form-control" name="password"/>
   
         <label for="usr">confirm password *</label>
         <input type="password" class="form-control" name="password"/>
   
   
        </ModalBody>
        <ModalFooter>
        <Link type="button" class="btn btn-primary " to = "/login">Register <br/></Link>
        <Link type="button" class="btn btn-primary " to = "/home">Cancel <br/></Link>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default Register;