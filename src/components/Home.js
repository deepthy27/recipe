import React, { Component } from 'react';
import home from './home.css';
import banner from "../assets/edit.png"
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class Home extends Component {
    
render() {
    return (
    <div className="image" >
          <Link  type="button" className="btn btn-secondary but " to = "/login">Login <br/></Link>
           <Link  type="button" className="btn btn-secondary but1" to = "/signup">Sign Up <br/></Link>
           <div>
               <img className="emo1" src="https://www.wader-zabawki.pl/media/products/e026941ac05eebf407431ae92263a8ae/images/thumbnail/big_yummy-kitchen-set-01.png?lm=1550671333"/>
           </div>
    </div>
    )}
}
export default Home;