
import React, { useState, useEffect, useRef } from 'react';
import {
    Container,
    Row,
    Col,
    Input,
    Button,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import RenderInputField from '../../../containers/buildComponents/RenderInputField/RenderInputField';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@mdi/react'
import { mdiDownload, mdiPencil } from '@mdi/js';



const ImageEditorOnline = (props) => {
    const { handleSubmit, initialize } = props

    // const imageEditorData = useSelector(state => state.form.imageEditorOnlineForm?.values);

    const dispatch = useDispatch();


    const submitData = data => {
        // console.log(data);
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col className='col-12'>
                    <form className="form" onSubmit={handleSubmit(submitData)}>
                        <div>
                            <p> demo </p>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default reduxForm({
    form: "imageEditorOnlineForm",
})(ImageEditorOnline);

