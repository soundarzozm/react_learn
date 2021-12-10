import React, {useState, useRef, useContext} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';
import {MyContext} from '../context';

const Stage1 = () => {

    const textInput = useRef();
    const context = useContext(MyContext);
    const [error, setError] = useState([false, '']);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateInput(value);

        if (validate){
            setError([false, ""]);
            context.addPlayerHandler(value);
            textInput.current.value = "";

        } else {
            console.log('error')
        }

    }

    const validateInput = (value) => {
        
        if (value === ""){
            setError([true, "Sorry, you need to add something"]);
            return false
        }

        if (value.length <= 2){
            setError([true, "Sorry, you need 3 characters at least"]);
            return false
        }

        return true;
    }

    console.log(context);

    return (
    <>
        <Form
            onSubmit = {handleSubmit} 
            className = "mt-4">

            <Form.Group>
                <Form.Control 
                    type = "text"
                    placeholder = "Add player name"
                    name = "player"
                    ref = {textInput}
                />
            </Form.Group>

            {error[0] ?
                <Alert variant="danger">
                    {error[1]}
                </Alert>

                : null
            }

            <Button 
                className = "miami" 
                variant= "primary"
                type = "submit"
            >
                Add player
            </Button>
            {
                context.state.players && context.state.players.length > 0 ?
                <>
                    <hr/>
                    <div>
                        <ul className="list-group">
                            {context.state.players.map((item, idx)=>(
                                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                                    {item}
                                    <span 
                                        className="badge badge-danger"
                                        onClick={()=>context.removePlayerHandler(idx)}>
                                        x
                                    </span>
                                </li>
                            ))
                            
                            }

                        </ul>

                    <div 
                        className="action_button"
                        onClick={()=>context.nextHandler()}>
                            Next
                    </div>

                    </div>
                </>

                : null
            }

        </Form>
    </>
    );
}

export default Stage1;
