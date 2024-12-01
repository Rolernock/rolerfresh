import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Card, ListGroup, Button, Container } from 'react-bootstrap'
import { FaRegCalendarAlt, FaTrashAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { readMessages, deleteMessage } from '../slices/messageSlice'
import Spinner from '../components/Spinner'
import DeleteMessageModal from '../components/DeleteMessageModal'

export default function ReadMessageScreen() {
  const dispatch = useDispatch()
  const { msg } = useSelector(state => state.messages)
  const [showModal, setShowModal] = useState(false)
  const [messageToDelete, setMessageToDelete] = useState(null)

  const handleShowModal = msgId => {
    setMessageToDelete(msgId)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setMessageToDelete(null)
  }

  useEffect(() => {
    dispatch(readMessages())
  }, [dispatch])

  const handleDelete = async msgId => {
    if (messageToDelete) {
      await dispatch(deleteMessage(msgId))
      await dispatch(readMessages())
      handleCloseModal()
    }
  }
  return (
    <>
      {!msg ? (
        <Spinner />
      ) : msg.length === 0 ? (
        <h2 className='text-center mt-3'>No messages found</h2>
      ) : (
        <Container>
          <h2 className='text-center mt-3 fw-bold'>Messages</h2>
          <Row>
            {msg.map(sms => (
              <Col lg={4} md={6} key={sms._id}>
                <Card className='my-3'>
                  <Card.Body>
                    <Card.Title>
                      {sms.name} - {sms.email}
                    </Card.Title>
                    <Card.Subtitle>{sms.subject}</Card.Subtitle>
                    <Card.Text>{sms.message}</Card.Text>
                  </Card.Body>
                  <ListGroup>
                    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                      Sent On:{' '}
                      <small className='text-muted'>
                        <FaRegCalendarAlt className='mx-1 mb-1' />
                        {format(sms.createdAt, 'MMMM dd, yyyy hh:mm a')}
                      </small>
                      <Button
                        className='btn-sm'
                        variant='danger'
                        onClick={() => handleShowModal(sms._id)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>
          <DeleteMessageModal
            show={showModal}
            handleClose={handleCloseModal}
            handleConfirm={() => handleDelete(messageToDelete)}
          />
        </Container>
      )}
    </>
  )
}
