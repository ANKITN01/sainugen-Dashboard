import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./BuisnessAccount.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactPerson from "../Contact Person/ContactPerson";


function BuisnessAccount(props) {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [contactNo, setContact] = useState("");
  let [emailId, setEmail] = useState("");
  

  function saveUser(e) {
    <ContactPerson namess={name}></ContactPerson>
    e.preventDefault();
    let data = {
      account: { name, type, contactNo, emailId },
      contacts:props.contact,
      internName: name,
    };
    // let contact = {};
<ContactPerson names={name}></ContactPerson>
    fetch("https://internship.leadtorev.com/clients/customers/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) =>
      result.json().then((resp) => {
        console.log("resp", resp);
      })
    );
  }

  return (
    <div>
      <Container className="addCoustmer">
        <Row>
          <Col>
            <h3 style={{color:"#2883C3",float:"left"}}>Add Coustmer</h3>
          </Col>
          <Col>
            <button style={{float:"right"}} onClick={saveUser}>Add Customer</button>
          </Col>
        </Row>
      </Container>

      <div className="BuisnessAccount">
        <Form>
        <Container>
        <Row><h2>Buisness Account details</h2></Row>
          <Row>
            <Col><input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Account Name"
          /></Col>
          <Col><input
            type="text"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            placeholder="Account Type"
          /></Col>
          </Row>

          <Row style={{marginTop:"10px"}}>
            <Col><input
            type="number"
            value={contactNo}
            onChange={(e) => {
              setContact(e.target.value);
            }}
            placeholder="Contact Number"
          /></Col>
          <Col>
          <input
            type="email"
            value={emailId}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email Id"
          />
          </Col>
          </Row>
        </Container>
        </Form>
      </div>
    </div>
  );
}
export default BuisnessAccount;
