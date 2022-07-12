import React, { useState } from 'react';
import DeleteIcon from '../assets/svg/delete';
import EditIcon from '../assets/svg/edit';
import { ToastContainer, toast } from 'react-toastify';
import NoData from '../components/noData/noData';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { validateInput } from '../utils/validation';
import { search, deleteUser, editUser } from '../api/userApi';
import UserModal from '../components/userModal/userModal';

export interface Person {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    status: boolean
}

interface Props {

}

const Search = (props: Props) => {
    const [searched, setSearched] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isFormValid, setIsFormValid] = useState(true)
    const [selectedUser, setSelectedUser] = useState<Partial<Person>>({})
    const [formData, setFormData] = useState<Partial<Person>>({
        first_name: '',
        last_name: '',
        email: ''
    })

    const [userData, setUserData] = useState<Person[]>([]);



    const getData = () => {
        if (validateInput(formData)) {
            setSearched(true)
            setIsFormValid(true)
            search(formData.first_name, formData.last_name, formData.email)
                .then(response => {
                    setUserData(response);
                })
        } else {
            setIsFormValid(false)
            console.log('invalid data')
        }
    }

    const editClick = (id: number) => {
        const selectedUser = userData.find(u => u.id === id) as Partial<Person>
        console.log(selectedUser)
        setSelectedUser(selectedUser)
        setShowModal(true)
    }

    const edit = (formData: Partial<Person>) => {
        if (validateInput(formData, true)) {
            editUser(formData)
            .then(response => toast("User updated.", { type: 'success' }))
            .catch(e => toast("Error updating user.", { type: 'error' }))
        }
    }

    const removeUser = (id: number) => {
        deleteUser(id)
        .then(success => {
            if (success) {
                toast("Successfully deleted user", { type: 'success' });
            }
            else{
                toast("Could not delete user", { type: 'error' });
            }
        })
        .catch(e => {
            toast("Could not delete user", { type: 'error' });
        });

    }

    return (
        <div>
            <Card className='m-2'>
                <Card.Body>
                    <Card.Title>
                        Search
                    </Card.Title>
                    <Card.Subtitle
                        className="mb-2 text-muted">
                        Use the combination below to search your record
                    </Card.Subtitle>
                    <Row className='mb-2'>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Firstname</Form.Label>
                                    <Form.Control placeholder="Firstname" value={formData?.first_name} isInvalid={!isFormValid}
                                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}></Form.Control>
                                    <Form.Control.Feedback type="invalid">Atleast one parameter is required for search</Form.Control.Feedback>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control placeholder="Lastname" value={formData?.last_name} isInvalid={!isFormValid}
                                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}></Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder="Email" value={formData?.email} isInvalid={!isFormValid}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}></Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button onClick={getData}>Search</Button>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

            <Card className='m-2'>
                <Card.Body>
                    {userData?.length > 0 && <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData?.map(person => <tr key={person.id}>
                                <th>{person.id}</th>
                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.email}</td>
                                <td>{person.gender}</td>
                                <td>{person.status.toString()}</td>
                                <td align='right'>
                                    <div>
                                        <Button variant="outline-light" onClick={() => editClick(person.id)}><EditIcon /></Button>
                                        <Button variant="outline-light" onClick={() => removeUser(person.id)} disabled><DeleteIcon /></Button>
                                    </div>
                                </td>
                            </tr>)}
                        </tbody>
                    </Table>}
                    {searched && userData?.length === 0 && <NoData />}
                </Card.Body>
            </Card>
            <UserModal onSubmit={edit} user={selectedUser} showModal={showModal} setShowModal={setShowModal} title="Edit User"/>
            <ToastContainer />
        </div>
    )
}

export default Search