import React from 'react'
import {Container, Row, Col, Table, Image} from 'react-bootstrap'
import {FcPhone} from "react-icons/fc"
import {AiOutlineMail} from "react-icons/ai"
import {AiFillMobile} from "react-icons/ai"
function Contact() {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md= {6}>
                <h1>CampusHungry Team</h1>
                <p>We value your feedback, questions, and concerns. Feel free to reach out to our team at CampusHungry for any inquiries or assistance related to our service. We are here to make your canteen ordering experience as smooth as possible.</p>
                <p>Our dedicated customer support team is available to assist you with any issues or questions you may have. Whether it's a technical problem, a menu inquiry, or a general query, we're here to help.</p>
                <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th className="bg-light text-center"  colSpan={3}>---CONTACT DETAILS---</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FcPhone /></td>
          <td>Phone</td>
          <td>68888-68888</td>
          
        </tr>
        <tr>
          <td><AiFillMobile /></td>
          <td>Mobile</td>
          <td>9893838383</td>
          
        </tr>
        <tr>
          <td><AiOutlineMail /></td>
          <td>Email</td>
          <td>campushungry@campushungry.com</td>
          
        </tr>
        
      </tbody>
    </Table>
            </Col>
            <Col md={6}>
                <Image
                    src='images/support.jpg'
                    style={{width: "100%" , height: "100%"}}

                />
            </Col>


        </Row>

      </Container>
    </>
  )
}

export default Contact
