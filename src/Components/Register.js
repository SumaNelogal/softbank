import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  FormText,
  Button,
  Dropdown,
} from "reactstrap";

const Register = () => {
  const navigate = useNavigate();

  const registerHandler = (e) => {
    alert("registration sucess.. login");
    navigate("/login",{replace:true})
   };
    const [name, setname] = useState("");
    const [middlename, setmiddlename] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [securityquestion,setsecurityquestion] = useState("");
    const [securityanswer,setsecurityanswer]=useState("")
    const [selectaccounttype,setselectaccounttype]=useState("")

  return (
    <Container className="p-4">
      <h2 className="text-center py-3">Registration Page</h2>
      <Form>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="name" sm={3} lg={2}>
            Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>{
                setname(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="middlename" sm={3} lg={2}>
            Middle Name
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="middlename"
              name="middlename"
              placeholder="middle name"
              value={middlename}
              onChange={(e)=>{
                setmiddlename(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="lastname" sm={3} lg={2}>
            Last Name
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={(e)=>{
                setlastname(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="username" sm={3} lg={2}>
          User Name
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e)=>{
                setusername(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="securityquestion" sm={3} lg={2}>
          Security Question
          </Label>

          <Col sm={9} lg={4}>
           
            <select id="Security Question" onChange={(e)=>setsecurityquestion(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="select a question">select a Question</option>
                    <option value="fav food" >fav food</option>
                    <option value="fav game">fav game</option>
                    <option value="fav spot">fav spot</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="password" sm={3} lg={2}>
           Set Password
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value);

              }}
              type="password"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="securityanswer" sm={3} lg={2}>
          Security Answer
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="securityanswer"
              name="securityanswer"
              placeholder="your answer"
              value={securityanswer}
              onChange={(e)=>{
                setsecurityanswer(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="selectaccounttype" sm={3} lg={2}>
          Select Account Type
          </Label>

          <Col sm={9} lg={4}>
          <select id="Select Account Type" onChange={(e)=>setselectaccounttype(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="select account type">select account type</option>
                    <option value="current account" >current account</option>
                    <option value="savings account">savings account</option>
                    <option value="business account">business account</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button onClick={registerHandler} >Register</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default Register