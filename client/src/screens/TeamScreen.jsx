import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'

export default function TeamScreen() {
  const teamMembers = [
    {
      name: 'John Doe',
      designation: 'Lead Organic Farmer',
      image: 'img/team-1.jpg'
    },
    {
      name: 'Jane Smith',
      designation: 'Sustainability Expert',
      image: 'img/team-2.jpg'
    },
    {
      name: 'James Brown',
      designation: 'Farm Operations Manager',
      image: 'img/team-3.jpg'
    },
    {
      name: 'Emily Johnson',
      designation: 'Soil Health Specialist',
      image: 'img/team-2.jpg'
    },
    {
      name: 'Michael Davis',
      designation: 'Agricultural Technology Specialist',
      image: 'img/team-3.jpg'
    },
    {
      name: 'Sarah Wilson',
      designation: 'Organic Certification Expert',
      image: 'img/team-1.jpg'
    }
  ]

  return (
    <Container fluid className='py-5'>
      <Container>
        {/* Header Section */}
        <div className='mx-auto text-center mb-5' style={{ maxWidth: '500px' }}>
          <h6 className='text-primary text-uppercase'>The Team</h6>
          <h1 className='display-5'>We Are Professional Organic Farmers</h1>
        </div>

        <Row className='g-5'>
          {teamMembers.map((member, index) => (
            <Col lg={4} md={6} key={index}>
              <div className='row g-0'>
                <div className='col-10'>
                  <div className='position-relative'>
                    <img
                      className='img-fluid w-100'
                      src={member.image}
                      alt={member.name}
                    />
                    <div
                      className='position-absolute start-0 bottom-0 w-100 py-3 px-4'
                      style={{ background: 'rgba(52, 173, 84, .85)' }}
                    >
                      <h4 className='text-white'>{member.name}</h4>
                      <span className='text-white'>{member.designation}</span>
                    </div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5'>
                    <a
                      className='btn btn-square rounded-circle bg-white'
                      href='#'
                    >
                      <FaTwitter className='text-secondary' />
                    </a>
                    <a
                      className='btn btn-square rounded-circle bg-white'
                      href='#'
                    >
                      <FaFacebookF className='text-secondary' />
                    </a>
                    <a
                      className='btn btn-square rounded-circle bg-white'
                      href='#'
                    >
                      <FaLinkedinIn className='text-secondary' />
                    </a>
                    <a
                      className='btn btn-square rounded-circle bg-white'
                      href='#'
                    >
                      <FaInstagram className='text-secondary' />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}
