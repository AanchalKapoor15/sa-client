import { Col, Form, Modal, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import { Person } from "../../pages/search"

interface Props {
    title: string
    onSubmit: (formData: Partial<Person>) => void
    showModal: boolean
    setShowModal: (value: boolean) => void
    user?: Partial<Person>
}
const UserModal = ({ title, onSubmit, showModal, setShowModal, user }: Props) => {
    const [submitForm, setSubmitForm] = useState(false)

    const [formData, setFormData] = useState<Partial<Person>>({
        first_name: '',
        last_name: '',
        email: ''
    })

    const closePopup = () => {
        resetForm()
    }

    const resetForm = () => {
        setShowModal(false)
        setSubmitForm(false)
        setFormData({
            first_name: '',
            last_name: '',
            email: ''
        })
    }

    const submitThisForm = () => {
        onSubmit(formData)
        resetForm()
    }

    useEffect(() => {
        if (user) {
            setFormData(user)
        }
    }, [user])
    return (
        <Modal show={showModal} size="lg" centered>
            <Modal.Header closeButton onClick={closePopup}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className='mb-2'>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control value={formData?.first_name} isInvalid={submitForm && !formData?.first_name}
                                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}></Form.Control>
                                <Form.Control.Feedback type="invalid">Firstname is required</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control value={formData?.last_name} isInvalid={submitForm && !formData?.last_name}
                                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}></Form.Control>
                                <Form.Control.Feedback type="invalid">Lastname is required</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={formData?.email} isInvalid={submitForm && !formData?.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}></Form.Control>
                                <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Gender</Form.Label>
                                <Form.Select value={formData?.gender} isInvalid={submitForm && !formData?.gender}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Select>

                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={submitThisForm}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserModal;