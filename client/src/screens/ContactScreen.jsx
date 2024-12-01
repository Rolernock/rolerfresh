import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { sendMessage } from '../slices/messageSlice'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { BsGeoAlt, BsEnvelopeOpen, BsPhoneVibrate } from 'react-icons/bs'

export default function ContactScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialState = { name: '', email: '', subject: '', message: '' }
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const { name, email, subject, message } = formData

  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }
  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const results = await dispatch(sendMessage(formData)).unwrap()
      results.msg && navigate('/')
    } catch (errors) {
      const messageErrors = errors.reduce((acc, err) => {
        acc[err.path] = err.msg
        return acc
      }, {})
      setErrors(messageErrors)
    }
    console.log(errors)
  }
  return (
    <Container fluid className='py-5 bg-light'>
      <Container>
        {/* Header Section */}
        <div className='mx-auto text-center mb-5' style={{ maxWidth: '500px' }}>
          <h6 className='text-primary text-uppercase'>Contact Us</h6>
          <h1 className='display-5 fw-bold'>Please Feel Free To Contact Us</h1>
        </div>

        <Row className='g-0'>
          {/* Contact Form Section */}
          <Col lg={7}>
            <div className='bg-primary h-100 p-5'>
              <Form onSubmit={handleSubmit}>
                <Row className='g-3'>
                  <Col md={6}>
                    <Form.Control
                      type='text'
                      value={name}
                      placeholder='Your Name'
                      name='name'
                      onChange={handleChange}
                      className='bg-light border-0 px-4'
                      style={{ height: '55px' }}
                      isInvalid={errors.name}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.name}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type='email'
                      name='email'
                      onChange={handleChange}
                      placeholder='Your Email'
                      value={email}
                      className='bg-light border-0 px-4'
                      style={{ height: '55px' }}
                      isInvalid={errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      type='text'
                      placeholder='Subject'
                      value={subject}
                      name='subject'
                      onChange={handleChange}
                      className='bg-light border-0 px-4'
                      style={{ height: '55px' }}
                      isInvalid={errors.subject}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      as='textarea'
                      name='message'
                      value={message}
                      rows={2}
                      onChange={handleChange}
                      placeholder='Message'
                      className='bg-light border-0 px-4 py-3'
                      isInvalid={errors.subject}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.message}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={12}>
                    <Button
                      type='submit'
                      variant='secondary'
                      className='w-100 py-3'
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

          {/* Contact Info Section */}
          <Col lg={5}>
            <div className='bg-secondary h-100 p-5'>
              <h2 className='text-white mb-4'>Get In Touch</h2>

              <div className='d-flex align-items-center mb-4'>
                <div
                  className='bg-primary rounded-circle d-flex align-items-center justify-content-center'
                  style={{ width: '60px', height: '60px' }}
                >
                  <BsGeoAlt className='fs-4 text-white' />
                </div>
                <div className='ps-3'>
                  <h5 className='text-white'>Our Office</h5>
                  <span className='text-white'>
                    Murang'a, 100m east of Magunas Supermarket.
                  </span>
                </div>
              </div>

              <div className='d-flex align-items-center mb-4'>
                <div
                  className='bg-primary rounded-circle d-flex align-items-center justify-content-center'
                  style={{ width: '60px', height: '60px' }}
                >
                  <BsEnvelopeOpen className='fs-4 text-white' />
                </div>
                <div className='ps-3'>
                  <h5 className='text-white'>Email Us</h5>
                  <span className='text-white'>rolernockgoines@gmail.com</span>
                </div>
              </div>

              <div className='d-flex align-items-center'>
                <div
                  className='bg-primary rounded-circle d-flex align-items-center justify-content-center'
                  style={{ width: '60px', height: '60px' }}
                >
                  <BsPhoneVibrate className='fs-4 text-white' />
                </div>
                <div className='ps-3'>
                  <h5 className='text-white'>Call Us</h5>
                  <span className='text-white'>+254 791483839</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
