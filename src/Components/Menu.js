import React from "react";
import { Container, Button } from "reactstrap";

const Menu = () => {
  return (
    <Container style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Button color="warning" size="md" className="m-5"  style={{width:"500px"}}>
     <b>Check Balance</b>
      </Button>
      <Button color="warning" size="md" className="m-5" style={{width:"500px"}}>
        <b>Fund Transfer</b>
      </Button>
      <Button color="warning" size="md" className="m-5" style={{width:"500px"}}>
        <b>Open New FD</b>
      </Button>
      <Button color="warning" size="md" className="m-5" style={{width:"500px"}}>
        <b>Events</b>
      </Button>
      <Button color="warning" size="md" className="m-5" style={{width:"500px"}}>
       <b> Logout</b>
      </Button>

      
    </Container>
  );
};

export default Menu;