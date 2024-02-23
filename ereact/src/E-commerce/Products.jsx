import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../Styling/Products.css"
import { Link } from "react-router-dom";
import Cart from "./Cart";




function Products() {
 
  const [display,setDisplay]=useState([]);


  useEffect(()=>{
    axios.get("http://localhost:7000/display").then((display)=>{
      // console.log(display.data);
      setDisplay(display.data)
    })
  })

  


  return (
    <div className="carddiv">
     <Row xs={1} md={3} className="g-3">
      {display.map((i, idx) => (
        <Col key={idx}>
          <Card className="h-100 w-100 productCard" style={{backgroundColor:"rgb(248, 239, 205)",border:"2px solid rgb(254, 231, 141)"}}>
            <Card.Img variant="top" className="cardImage" src={i.Image} />
            <Card.Body>
              <Card.Title>{i.Product}</Card.Title>
              <Card.Text>
               Rating : {i.Rating}
              </Card.Text>
              <Card.Text>
               Price : {i.Price}
              </Card.Text>
              
           <Link to="/cart"> <Button variant="warning"  >TRY NOW</Button></Link>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

  

    
    </div>
  );
}

export default Products;
