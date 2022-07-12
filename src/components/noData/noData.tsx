import { useState } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import OopsIcon from "../../assets/svg/oops"
import { Person } from "../../pages/search"
import { validateInput } from '../../utils/validation'
import { addUser } from "../../api/userApi"
import { ToastContainer, toast } from 'react-toastify';
import "./noData.css"
import UserModal from '../userModal/userModal';

const NoData = () => {
    const [showModal, setShowModal] = useState(false)

    const add = (formData: Partial<Person>) => {
        if (validateInput(formData, true)) {
            addUser(formData)
            .then(response => toast("User added.", { type: 'success' }))
            .catch(e => toast("Error adding user.", { type: 'error' }))
        }
    }

    return (
        <div className="textContainerStyle">
            <Row>
                <Col>
                    <OopsIcon size="40" />
                    <span className="textStyle">No data found.</span>
                    <Button variant="link" onClick={() => setShowModal(true)}>Create new user</Button>
                </Col>
            </Row>
            <UserModal onSubmit={add} showModal={showModal} setShowModal={setShowModal} title="Add User"/>
            <ToastContainer />
        </div>
    )
}

export default NoData