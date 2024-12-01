import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const products = [
  {
    id: 1,
    name: 'Organic Vegetable',
    price: 'Ksh. 1950',
    image: 'img/product-1.png'
  },
  {
    id: 2,
    name: 'Organic Vegetable',
    price: 'Ksh. 1800',
    image: 'img/product-2.png'
  },
  {
    id: 3,
    name: 'Organic Vegetable',
    price: 'Ksh. 2000',
    image: 'img/product-1.png'
  },
  {
    id: 4,
    name: 'Organic Vegetable',
    price: 'Ksh. 1900',
    image: 'img/product-2.png'
  },
  {
    id: 5,
    name: 'Organic Vegetable',
    price: 'Ksh. 1980',
    image: 'img/product-1.png'
  }
]

export default function ProductScreen() {
  return (
    <Container fluid className='py-5 bg-light'>
      <Container>
        {/* Header Section */}
        <div className='mx-auto text-center mb-5' style={{ maxWidth: '500px' }}>
          <h6 className='text-primary text-uppercase'>Products</h6>
          <h1 className='display-5 fw-bold'>Our Fresh & Organic Products</h1>
        </div>

        {/* Products Grid */}
        <Row className='g-4'>
          {products.map(product => (
            <Col lg={3} md={4} sm={6} key={product.id}>
              <Card className='text-center shadow-sm border-0'>
                <Card.Img
                  variant='top'
                  src={product.image}
                  alt={product.name}
                  className='img-fluid mb-3'
                />
                <Card.Body>
                  <Card.Title className='mb-3'>{product.name}</Card.Title>
                  <Card.Text className='text-primary fw-bold mb-3'>
                    {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}
