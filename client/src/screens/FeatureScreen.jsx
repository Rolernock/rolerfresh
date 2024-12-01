import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaSeedling, FaAward, FaTractor, FaPhoneAlt } from 'react-icons/fa'

export default function FeatureScreen() {
  return (
    <Container
      fluid
      className='bg-primary feature py-5 pb-lg-0'
      style={{ margin: '90px 0 135px 0' }}
    >
      <Container className='py-5 pb-lg-0'>
        {/* Header Section */}
        <div
          className='mx-auto text-center mb-3 pb-2'
          style={{ maxWidth: '500px' }}
        >
          <h6 className='text-uppercase text-secondary'>Features</h6>
          <h1 className='display-5 text-white'>Why Choose Us?</h1>
        </div>

        <Row className='g-5'>
          {/* Left Column */}
          <Col lg={3}>
            <div className='text-white mb-5'>
              <div
                className='bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3'
                style={{ width: '60px', height: '60px' }}
              >
                <FaSeedling className='fs-4 text-white' />
              </div>
              <h4 className='text-white'>100% Organic</h4>
              <p className='mb-0'>
                We prioritize health and sustainability by offering certified
                organic products, free from harmful chemicals.
              </p>
            </div>

            <div className='text-white'>
              <div
                className='bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3'
                style={{ width: '60px', height: '60px' }}
              >
                <FaAward className='fs-4 text-white' />
              </div>
              <h4 className='text-white'>Award-Winning Service</h4>
              <p className='mb-0'>
                Recognized globally for exceptional quality and customer
                satisfaction in the organic farming industry.
              </p>
            </div>
          </Col>

          {/* Center Column */}
          <Col lg={6}>
            <div className='d-block bg-white h-100 text-center p-5 pb-lg-0'>
              <p>
                Our mission is to transform agriculture by promoting
                eco-friendly practices and delivering fresh, high-quality
                produce directly to your doorstep. With our expertise and
                commitment to excellence, we ensure every product meets your
                expectations and contributes to a healthier planet.
              </p>
              <img className='img-fluid' src='img/feature.png' alt='Feature' />
            </div>
          </Col>

          {/* Right Column */}
          <Col lg={3}>
            <div className='text-white mb-5'>
              <div
                className='bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3'
                style={{ width: '60px', height: '60px' }}
              >
                <FaTractor className='fs-4 text-white' />
              </div>
              <h4 className='text-white'>Modern Farming Techniques</h4>
              <p className='mb-0'>
                Leveraging state-of-the-art technology to ensure sustainable
                farming and superior product quality.
              </p>
            </div>

            <div className='text-white'>
              <div
                className='bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3'
                style={{ width: '60px', height: '60px' }}
              >
                <FaPhoneAlt className='fs-4 text-white' />
              </div>
              <h4 className='text-white'>24/7 Customer Support</h4>
              <p className='mb-0'>
                Our dedicated support team is available around the clock to
                address your concerns and assist with orders.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
