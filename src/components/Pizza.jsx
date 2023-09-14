import React,{useState} from 'react'
import {Card,Button,Row,Col,Modal} from 'react-bootstrap'

import {GiPriceTag} from 'react-icons/gi'
import {BiRupee} from 'react-icons/bi'
import {BsInfoSquare} from 'react-icons/bs'
const Pizza = ({pizza}) => {
    const[varient,setVarient] = useState('small')
    const[quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  return (
    <>
       <Card style={{ width: '18rem', marginTop:"25px" }}>
      <Card.Img variant="top" 
      src={pizza.image} 
      style={{height:"230px", cursor:"pointer"}}
      onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select value={varient} onChange={e => setVarient(e.target.value)}>
                    {pizza.varients.map((varient) =>(
                       <option  >{varient}</option> 
                    ))}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((v,i) => (
                        <option value={i+1} >{i+1}</option>
                    ))}
                </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
            <Col md={6}>
                <GiPriceTag/> Price: {pizza.prices[0][varient] * quantity} <BiRupee />
            </Col>
            <Col md={6}>
            <Button variant="outline-success">Add To Cart</Button>
            </Col>
        </Row>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <Card.Img variant="top" 
      src={pizza.image} 
      style={{height:"230px"}}
      />
            </div>
            <div>
                <h5> <BsInfoSquare />: {pizza.description}</h5>
            
            </div>
            </Modal.Body>
        
      </Modal>
   
    </>
  )
}

export default Pizza
