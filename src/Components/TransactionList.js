import React from "react";
import { useLocation } from "react-router-dom";
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
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
import Menu from "./Menu";
const TransactionList = () => {
  const location = useLocation();
  if(!location.state) return <Menu/>

  return (
    <Container>
        <h2 className="text-center">Transactions</h2>
      <ul className="m-5">
      {location.state.map((fundtransfer) => (
        <li style={{"listStyleType":"none" ,"border":"2px solid"}} key={fundtransfer.fromaccount} className="m-4 p-3"> 

          <p><b>Account Number</b> : {fundtransfer.fromaccount}</p>
          
          <p>Transaction Amount :{fundtransfer.amount}</p>
          <p>Benificiary :{fundtransfer.benificiary}</p>
          <p>Beni Account :{fundtransfer.benificiaryaccount}</p>
          <p>Beni Acc Type :{fundtransfer.benificiaryaccounttype}</p>
          <p>Beni ifsc :{fundtransfer.benificiaryifsccode}</p>
          <p>Remarks :{fundtransfer.remarks}</p>
          
        </li>
        
      ))}
      
    </ul>
    </Container>
  );
};

export default TransactionList;