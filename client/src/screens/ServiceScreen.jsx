import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {
  FaCarrot,
  FaAppleAlt,
  FaDog,
  FaTractor,
  FaSeedling
} from 'react-icons/fa'
import { Link } from 'react-router'

const services = [
  {
    icon: <FaCarrot size={50} className='text-primary mb-3' />,
    title: 'Fresh Vegetables',
    description:
      'Our farm provides a variety of freshly harvested, organic vegetables to ensure your meals are healthy and delicious.'
  },
  {
    icon: <FaAppleAlt size={50} className='text-primary mb-3' />,
    title: 'Fresh Fruits',
    description:
      'Enjoy a wide selection of juicy, organic fruits packed with essential nutrients for a healthy lifestyle.'
  },
  {
    icon: <FaDog size={50} className='text-primary mb-3' />,
    title: 'Healthy Cattle',
    description:
      'Our well-cared-for cattle produce high-quality dairy and meat products, raised with love and care.'
  },
  {
    icon: <FaTractor size={50} className='text-primary mb-3' />,
    title: 'Modern Trucks',
    description:
      'Efficient transportation using modern trucks ensures your produce reaches you fresh and on time.'
  },
  {
    icon: <FaSeedling size={50} className='text-primary mb-3' />,
    title: 'Farming Plans',
    description:
      'Get expert guidance on sustainable farming plans tailored to your needs for a greener future.'
  }
]

export default function ServicePage() {
  return (
    <Container fluid className='py-5 bg-light'>
      <Container>
        <Row className='g-5'>
          {/* Introduction Section */}
          <Col lg={4} md={6}>
            <div className='mb-4'>
              <h6 className='text-primary text-uppercase'>Services</h6>
              <h1 className='display-5 fw-bold'>Organic Farm Services</h1>
            </div>
            <p>
              Experience the best in organic farming with our diverse range of
              services designed to bring nature closer to your plate. We are
              committed to delivering quality, sustainability, and freshness in
              every offering.
            </p>
            <Button
              variant='primary'
              size='lg'
              as={Link}
              to='/contact'
              className='py-md-3 px-md-5'
            >
              Contact Us
            </Button>
          </Col>

          {/* Services List */}
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <div className='service-item bg-white text-center p-5 shadow-sm rounded'>
                {service.icon}
                <h4 className='fw-bold'>{service.title}</h4>
                <p className='mb-0'>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}
