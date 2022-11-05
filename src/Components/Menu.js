import React from "react";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


const Menu = () => {

  const navigate = useNavigate();
  const registerHandler = (e) => {
    navigate("/fundtransfer")
   };
   const newfdHandler = (e) => {
    navigate("/newfd")
   };
   const eventHandler = (e) => {
    navigate("/events")
   };
   const logoutHandler = (e) => {
    navigate("/login")
   };

  return (
    <Container style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Button color="warning" size="md" className="m-5"  style={{width:"500px"}}>
     <b>Check Balance</b>
      </Button>
      <Button onClick={registerHandler} color="warning" size="md" className="m-5" style={{width:"500px"}}>
        <b>Fund Transfer</b>
      </Button>
      <Button onClick={newfdHandler} color="warning" size="md" className="m-5" style={{width:"500px"}}>
        <b>Open New FD</b>
      </Button>
      <Button onClick={eventHandler} color="warning" size="md" className="m-5" style={{width:"500px"}}>
        <b>Events</b>
      </Button>
      <Button onClick={logoutHandler} color="warning" size="md" className="m-5" style={{width:"500px"}}>
       <b> Logout</b>
      </Button>

      
    </Container>
  );
};

export default Menu;