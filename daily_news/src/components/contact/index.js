import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Alert} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {sendMessage} from '../../store/actions'
import {showToast} from '../utils/tools'

const Contact = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            email: Yup
            .string()
            .required('Sorry, this is required.')
            .email('Sorry, the email is invalid.'),

            firstname: Yup
            .string()
            .required('Sorry, this is required.'),

            lastname: Yup
            .string()
            .required('Sorry, this is required.'),

            message: Yup
            .string()
            .required('Sorry, this is required.')
            .max(500, 'Sorry, the message is too long.')
        }),

        onSubmit: (values, {resetForm}) => {
            dispatch(sendMessage(values)).then(({payload})=>{
                
                if(payload){
                    resetForm()
                    showToast('SUCCESS', 'Thank you, we will contact you back!')
                } 
                
                else {
                    showToast("ERROR", 'Sorry, something went wrong!')
                }    
            })
        }

    })

    return(
        <>
            <h1>Contact us</h1>

            <form className='mt-3' onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstname'>First name</label>
                    <input
                        type='firstname'
                        className='form-control'
                        name='firstname'
                        placeholder='First name'
                        {...formik.getFieldProps('firstname')}
                    />
                    {
                        formik.errors.firstname && formik.touched.firstname ?
                        <Alert variant='danger'>
                            {formik.errors.firstname}
                        </Alert>
                        : null
                    }
                </div>

                <div className='form-group'>
                    <label htmlFor='lastname'>Last name</label>
                    <input
                        type='lastname'
                        className='form-control'
                        name='lastname'
                        placeholder='Last name'
                        {...formik.getFieldProps('lastname')}
                    />
                    {
                        formik.errors.lastname && formik.touched.lastname ?
                        <Alert variant='danger'>
                            {formik.errors.lastname}
                        </Alert>
                        : null
                    }
                </div>
                
                <div className='form-group'>
                    <label htmlFor='email'>E-Mail</label>
                    <input
                        type='email'
                        className='form-control'
                        name='email'
                        placeholder='E-Mail'
                        {...formik.getFieldProps('email')}
                    />
                    {
                        formik.errors.email && formik.touched.email ?
                        <Alert variant='danger'>
                            {formik.errors.email}
                        </Alert>
                        : null
                    }
                </div>

                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        type='message'
                        className='form-control'
                        name='message'
                        placeholder='Message'
                        rows='3'
                        {...formik.getFieldProps('message')}
                    />
                    {
                        formik.errors.message && formik.touched.message ?
                        <Alert variant='danger'>
                            {formik.errors.message}
                        </Alert>
                        : null
                    }
                </div>

            <button type='submit' className='btn btn-primary mb-2'>
                Send message
            </button>

            </form>

        </>
    )
}

export default Contact
