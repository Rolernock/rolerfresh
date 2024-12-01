import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <Container
      fluid
      className='d-flex align-items-center justify-content-center vh-100 bg-light'
    >
      <Row className='text-center'>
        <Col>
          <h1 className='display-1 text-primary fw-bold'>404</h1>
          <h2 className='mb-4 text-secondary'>Page Not Found</h2>
          <p className='mb-4 text-muted'>
            Oops! The page you are looking for does not exist. It might have
            been removed, renamed, or is temporarily unavailable.
          </p>
          <Button as={Link} size='lg' to='/'>
            Go Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
