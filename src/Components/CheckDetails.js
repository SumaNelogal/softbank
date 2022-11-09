import { useState, useEffect } from "react";
//import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "reactstrap";

import axios from "axios";
export const CheckDetails = () => {
	const navigate=useNavigate();
	const [fromaccount, setfromaccount] = useState(0);

	const displayHandler = (e) => {
		e.preventDefault();
		
		// setIsSubmit(true);
		axios.get("http://localhost:8080/api/v1/fundtransfer",{params:{fromaccount}}).then((res)=>{
			if(res.data){
			  console.log(res.data)
			  navigate("/transactionList",{state:res.data})
			  
			}
		  })
	   };

	

	return (
		<Container className="p-3">
			<Container className="p-3">
				Account Details
				<Container className="p-3 mb-1 bg-light rounded-3">
					<div className="d-flex justify-content-around">
						<div className="mb-3 d-flex flex-column align-items-start justify-content-start">
							<label className="form-label" htmlFor="fromaccount">
								fromaccount :
							</label>

							<input
								type="text"
								className="form-control"
								id="fromaccount"
								name="fromaccount"
								onChange={(e)=>setfromaccount(e.target.value)}
								
							/>
						</div>
						<Button onClick={displayHandler }className="m-3" >Display</Button>

						
					</div>
				</Container>
			</Container>
			
		</Container>
	);
};