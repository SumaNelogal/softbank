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

const Fundtransfer = () => {
    const [fromaccount, setfromaccount] = useState("");
    const [benificiary, setbenificiary] = useState("");
    const [benificiaryaccount, setbenificiaryaccount] = useState("");
    const [benificiaryifsccode, setbenificiaryifsccode] = useState("");
    const [benificiaryaccounttype, setbenificiaryaccounttype] = useState("");
    const [amount,setamount] = useState("");
    const [remarks,setremarks]=useState("")
    

  return (
    <Container className="p-4">
        <h2 className="text-center py-3">Transfer</h2>
      
      <Form>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="fromaccount" sm={3} lg={2}>
          fromaccount
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="fromaccount"
              name="fromaccount"
              placeholder="fromaccount"
              value={fromaccount}
              onChange={(e)=>{
                setfromaccount(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="benificiaryaccount" sm={3} lg={2}>
          benificiaryaccount
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="benificiaryaccount"
              name="benificiaryaccount"
              placeholder="benificiaryaccount"
              value={benificiaryaccount}
              onChange={(e)=>{
                setbenificiaryaccount(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="benificiaryifsccode" sm={3} lg={2}>
          benificiaryifsccode
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="benificiaryifsccode"
              name="benificiaryifsccode"
              placeholder="benificiaryifsccode"
              value={benificiaryifsccode}
              onChange={(e)=>{
                setbenificiaryifsccode(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="amount" sm={3} lg={2}>
          amount
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="amount"
              name="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e)=>{
                setamount(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="benificiary" sm={3} lg={2}>
          benificiary
          </Label>

          <Col sm={9} lg={4}>
           
            <select id="benificiary" onChange={(e)=>setbenificiary(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="select benificiary">select a benificiary</option>
                    <option value="mother" >mother</option>
                    <option value="father">father</option>
                    <option value="husband/wife">husband/wife</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="remarks" sm={3} lg={2}>
          remarks
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="remarks"
              name="remarks"
              placeholder="remarks "
              value={remarks}
              onChange={(e)=>{
                setremarks(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="benificiaryaccounttype" sm={3} lg={2}>
          benificiaryaccounttype
          </Label>

          <Col sm={9} lg={4}>
          <select id="benificiaryaccounttype" onChange={(e)=>setbenificiaryaccounttype(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="benificiary account type">benificiary account type</option>
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
            <Button>Transfer</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default Fundtransfer