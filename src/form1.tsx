import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
interface Props {
    handleNext: () => void
}

const FormOne: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                address: '',
                zipcode: ''
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                address: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                zipcode: Yup.string()
                    .min(5, 'minimum 5 character')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            <Form>
                <h3>Shipping Address</h3>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <br />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />

                <br />

                <label htmlFor="address">Address</label>
                <Field name="address" type="text" />
                <ErrorMessage name="address" />

                <br />

                <label htmlFor="zipcode">Zip Code</label>
                <Field name="zipcode" type="number" />
                <ErrorMessage name="zipcode" />

                <br />
                <FormControlLabel
                    control={<Checkbox color="primary" name="saveAddress" value="yes" />}
                    label="Use this address for payment details"
                />
                <br />
                <button type="submit" color="primary">Next</button>
            </Form>
        </Formik >
    );
};

export default FormOne;