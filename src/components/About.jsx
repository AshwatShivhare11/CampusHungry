import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
const About = () => {
  return (
    <>
    <Container style={{marginTop: '50px'}}>
        <h1>Who we are</h1>
        <p>Welcome to CampusHungry, we understand the challenges of college life, and one of the biggest hurdles we all face is the long queues at the college canteen. That's why we've created a seamless solution to eliminate those endless lines and make your dining experience more efficient and enjoyable.</p>
        <h1>Our Mission</h1>
        
        <p>Our mission is simple yet powerful: to revolutionize the way you order food at your college canteen. We are committed to providing students with a hassle-free, convenient, and time-saving way to place food orders, ensuring that you have more time to enjoy your meals and focus on your studies.</p>
        

        <h1>Why Choose us?</h1>
        <Row>
        <Col md={6}><p>1. No More Waiting in Line: Say goodbye to those frustrating, time-consuming lines. With CampusHungry, you can browse the menu, place your order, and pay – all from the comfort of your smartphone or computer.</p>
        </Col>
        <Col md={6}><p>2. Customized Menus: We work closely with your college canteen to offer you a diverse and customizable menu. Whether you have dietary preferences, allergies, or specific cravings, we've got you covered.</p>
        </Col>
        <Col md={6}><p>3. Secure Payments: We prioritize your security. Our payment gateway ensures your financial information is safe and secure, so you can order with confidence.</p>
        </Col>
        </Row>
        <h1>Our Commitment</h1>
        <p>We are dedicated to enhancing your college dining experience by reducing wait times, ensuring food quality, and offering a user-friendly platform that simplifies the entire process. Our team is passionate about what we do, and we continuously strive to improve and innovate our services to meet your needs.

Join the CampusHungry community today and enjoy the convenience of ordering food without the long queues. We look forward to serving you and making your college life more delicious and efficient!

If you have any questions or feedback, please don't hesitate to reach out to our customer support team. We are here to make your college dining experience the best it can be.

Thank you for choosing CampusHungry!</p>

    </Container>
      
    </>
  )
}

export default About
