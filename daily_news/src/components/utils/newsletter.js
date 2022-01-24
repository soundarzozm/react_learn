import React, {useRef, useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import {addNewsletter} from '../../store/actions'
import {showToast} from './tools'

const Newsletter = () => {
    
    const userData = useSelector(state=>state.userReducer)
    const dispatch = useDispatch()
    const textInput = useRef()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = textInput.current.value
        dispatch(addNewsletter({email: email}))
    }

    useEffect(()=>{

        if(userData.newsletter){
            if(userData.newsletter === 'added'){
                showToast('SUCCESS', "Thank you for subscribing!")
                textInput.current.value=""
            } else {
                showToast('ERROR', "You have already subscribed!")
                textInput.current.value=""
            }
        }
    }, [userData])
        
    return(
        <>
            <div className='newsletter_container'>
                <h1>Join our newsletter</h1>
                <div className='form'>
                    <Form onSubmit={handleSubmit} className='mt-4'>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                placeholder='Enter your e-mail address'
                                name='email'
                                ref={textInput}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Add me to the list!
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Newsletter
