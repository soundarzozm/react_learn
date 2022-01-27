import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const FormThree = () => {

    const formikProps = {
        initialValues: {firstname: '', color: '', lastname: ''},
        validationSchema: Yup.object({
            firstname: Yup
            .string()
            .required('Sorry, this is required.'),

            color: Yup
            .string()
            .required('Sorry, this is required.'),

            lastname: Yup
            .string()
            .required('Sorry, this is required.')
        }),
        onSubmit: values => {
            console.log(values)
        }
    }

    const lastnameCustomField = ({
        field,
        form: {touched, errors},
        ...props
    }) => (
        <>
            <label htmlFor={field.name}>Last name</label>
            <input
                type='text'
                className='form-control'
                {...field}
                placeholder={props.placeholder}
            />
            {
                errors[field.name] && touched[field.name] ?
                <span>{errors[field.name]}</span>
                : null
            }
        </>
    )

    return(

        <Formik {...formikProps}>
            {formik => (
                <div className="container">
                <div className="col-md-12 mt-5">
                    <Form>
                        <label htmlFor="firstname">First name</label>
                        <Field
                            className="form-control" 
                            type="text" 
                            name="firstname"
                        />
                        {/* <input 
                            className="form-control" 
                            type="text" 
                            name="firstname"
                        /> */}
                        <ErrorMessage name='firstname'/>
                        
                        <hr className='mb-4'/>

                        <label htmlFor='color'>Color</label>
                        <Field 
                            as = 'select'
                            name = 'color'
                            className = 'custom-select'
                        >
                            <option value='red'>Red</option>
                            <option value='green'>Green</option>
                            <option value='blue'>Blue</option>
                        </Field>
                        {
                            formik.errors.color ? 
                            <span>{formik.errors.color}</span>
                            : null
                        }
                        <hr className="mb-4" />

                        <Field
                            name='lastname'
                            component={lastnameCustomField}
                            placeholder='Last Name'
                        />

                        <hr className="mb-4" />

                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Submit
                        </button>
                    </Form>
                </div>
                </div>
            )} 
        </Formik>
    )
}

export default FormThree;