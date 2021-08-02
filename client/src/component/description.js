import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';


 function Description() {
    return (
        <div>
         
            <Row>
           
            <Col lg={6} xs={6} sm={12}>
            <Container>
            <div className="desc">
  <h1>Best way to eat 
 <br></br> healthy food</h1>
  <p>
  Making a reservation at Délicious restaurant is easy <br></br>and takes just a
couple of minutes.


  </p>
  <p>
    <button>Our Menu</button>
  </p>
</div>
</Container>
</Col>

<Col lg={6} xs={6} sm={12}>
<img
        src="/img/footer3.jpg"
        width="100%"
        height="auto"
        className=" mb-5"
        alt="React Bootstrap logo"
      />
</Col>
</Row>

        </div>
    )
}
export default Description
