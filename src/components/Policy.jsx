import React from 'react'
import {Container, Row, Col, Table, Image} from 'react-bootstrap'

const Policy = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <h1 className="text-center">Terms and Policies </h1>
        <Row>
        <Col md={6}>
                <Image
                    src='images/terms.jpg'
                    style={{width: "100%" , height: "100%"}}

                />
            </Col>
            <Col md={6}>
                <h6> Privacy Policy:</h6>
                <p>We respect your privacy and are committed to protecting your personal information. Our privacy policy outlines how we collect, use, and safeguard your data. It includes information on the type of data we collect, how it's used, and your rights regarding your data.</p>
                <h6>Payment Policy:</h6>
                <p>This policy covers the payment methods accepted, transaction security measures, and refund or cancellation procedures. It ensures that your financial transactions on our platform are secure and transparent.</p>
                <h6>Quality Assurance Policy:</h6>
                <p>We are committed to providing high-quality food and service. This policy outlines our quality control measures, including food safety, hygiene standards, and customer satisfaction. It also explains our procedure for handling quality-related issues or complaints.</p>
                <h6>Terms of Use:</h6>
                <p>This policy sets out the terms and conditions for using our canteen ordering website. It includes rules of conduct, intellectual property rights, and disclaimers of liability.</p>
                <h6>Security Policy:</h6>
                <p>Your security is paramount. This policy details our security measures, such as encryption, data protection, and best practices for keeping your account secure. It also explains what to do in case of suspected security breaches.</p>


            </Col>
            

        </Row>


      </Container>
    </>
  )
}

export default Policy
