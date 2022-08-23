import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import './ContactPerson.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonLinesFill} from "react-icons/bs";
import BuisnessAccount from '../BuisnessAccount/BuisnessAccount';

const ContactPerson = (props) => {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [contactNo, setContact] = useState("");
  let [emailId, setEmail] = useState("");
  let [Username, setUsername] = useState("");
  let [designation, setDesignation] = useState("");
  let [title, setTitle] = useState("");


  function submit(e){
    e.preventDefault();
    let data = {
      contacts:[{type,name,emailId,contactNo,Username,designation}],
      internName:"Ankit Nakhale"
    };
 
<BuisnessAccount contact={data}></BuisnessAccount>
// fetch("https://internship.leadtorev.com/clients/customers/add", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// }).then((result) =>
//   result.json().then((resp) => {
//     console.log("resp", resp);
//   })
// );
    
  }

  return (
    <>
    <div className='contactPerson'>
    <Row>
      <Col><h3><BsFillPersonLinesFill/>Contact Person</h3></Col>
      <Col><button onClick={submit} style={{float:"right"}}>Add New</button></Col>
    </Row>
      <div>
      <Table style={{}}>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>Title</td>
          <td><input value={type} onChange={(e)=> setType(e.target.value)} placeholder='Title'></input></td>
        </tr>
        <tr>
          <td>Name</td>
          <td><input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td><input placeholder='Number' type="number" value={contactNo} onChange={(e)=> setContact(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>Email Id</td>
          <td><input placeholder='Email Id' value={emailId} onChange={(e)=> setEmail(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>Designation</td>
          <td><input type="text" placeholder='Designation' value={designation} onChange={(e)=> setDesignation(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>User Name</td>
          <td><input type="text" placeholder='User Name' value={Username} onChange={(e)=> setUsername(e.target.value)}></input></td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
    </>
  )
}

export default ContactPerson;
