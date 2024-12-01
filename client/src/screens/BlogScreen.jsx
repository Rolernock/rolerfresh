import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const blogs = [
  {
    title: 'The Nutritional Benefits of Leafy Greens',
    image: 'img/blog-1.jpg',
    date: 'Jan 01, 2024',
    link: '/blog/1'
  },
  {
    title: 'How to Grow Your Own Organic Vegetables at Home',
    image: 'img/blog-2.jpg',
    date: 'Feb 15, 2024',
    link: '/blog/2'
  },
  {
    title: 'Top 5 Vegetables to Boost Your Immune System',
    image: 'img/blog-3.jpg',
    date: 'Mar 10, 2024',
    link: '/blog/3'
  },
  {
    title: 'The Importance of Eating Seasonal Vegetables',
    image: 'img/blog-1.jpg',
    date: 'Apr 05, 2024',
    link: '/blog/4'
  },
  {
    title: 'Sustainable Farming Practices for Growing Vegetables',
    image: 'img/blog-2.jpg',
    date: 'May 20, 2024',
    link: '/blog/5'
  },
  {
    title: 'How Vegetables Help in Weight Management',
    image: 'img/blog-3.jpg',
    date: 'Jun 10, 2024',
    link: '/blog/6'
  },
  {
    title: 'The Role of Vegetables in a Balanced Diet',
    image: 'img/blog-1.jpg',
    date: 'Jul 01, 2024',
    link: '/blog/7'
  },
  {
    title: 'Why You Should Incorporate Root Vegetables in Your Diet',
    image: 'img/blog-2.jpg',
    date: 'Aug 12, 2024',
    link: '/blog/8'
  },
  {
    title: 'How to Cook Vegetables to Retain Nutrients',
    image: 'img/blog-3.jpg',
    date: 'Sep 08, 2024',
    link: '/blog/9'
  },
  {
    title: 'The Environmental Impact of Industrial Vegetable Farming',
    image: 'img/blog-1.jpg',
    date: 'Oct 15, 2024',
    link: '/blog/10'
  }
]

export default function BlogScreen() {
  return (
    <Container className='py-5' style={{ backgroundColor: '#f9f9f9' }}>
      <Row className='g-5'>
        {/* Blog List Start */}
        <Col lg={12}>
          <Row className='g-4'>
            {blogs.map((blog, index) => (
              <Col md={6} key={index}>
                <Card className='blog-item shadow-lg border-0 rounded-3 overflow-hidden'>
                  <Card.Img variant='top' src={blog.image} alt={blog.title} />
                  <Card.Body className='bg-dark text-white p-4'>
                    <Card.Title className='fs-4 mb-3'>{blog.title}</Card.Title>
                    <Card.Text className='text-muted mb-3'>
                      {blog.date}
                    </Card.Text>
                    <Button variant='primary' href={blog.link}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
