import { Container, Row, Col, Image } from 'react-bootstrap'

export default function AboutScreen() {
  return (
    <Container fluid className='pt-5 bg-light'>
      <Container>
        <Row className='gx-5 align-items-center'>
          {/* Image Section */}
          <Col lg={6} className='mb-5 mb-lg-0'>
            <div className='border border-5 border-primary border-bottom-0 pt-4'>
              <Image
                src='img/about.png'
                alt='About Us'
                fluid
                className='d-block mx-auto mt-auto'
              />
            </div>
          </Col>

          {/* Content Section */}
          <Col lg={6}>
            <div className='mb-4'>
              <h6 className='text-primary text-uppercase'>About Us</h6>
              <h1 className='display-5 fw-bold'>
                Committed to Delivering Fresh, Organic, and Healthy Produce
              </h1>
            </div>
            <p className='mb-4'>
              At FarmFresh, we are dedicated to providing families with organic
              and sustainably sourced produce. Our mission is to nurture a
              healthier world by connecting you with fresh, chemical-free fruits
              and vegetables that bring flavor and nutrition to every meal.
            </p>
            <Row className='gx-5 gy-4'>
              <Col sm={6}>
                <i className='fa fa-seedling display-1 text-secondary'></i>
                <h4>100% Organic</h4>
                <p className='mb-0'>
                  All our produce is grown without synthetic pesticides or
                  harmful chemicals, ensuring that every bite is as natural as
                  nature intended.
                </p>
              </Col>
              <Col sm={6}>
                <i className='fa fa-award display-1 text-secondary'></i>
                <h4>Award-Winning Quality</h4>
                <p className='mb-0'>
                  Recognized by industry leaders, our commitment to excellence
                  has earned us multiple awards for quality and sustainability.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
