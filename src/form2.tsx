import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
    handleNext: () => void
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{
                account: '',
                date: '',
                cvv: '',
            }}
            validationSchema={Yup.object({
                account: Yup.string()
                    .min(16, 'Must be 16 characters or less')
                    .required('Required'),
                date: Yup.string()
                    .required('Required'),
                cvv: Yup.string()
                    .min(3, 'Must be 3 characters!')
                    .required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    // setSubmitting(false);
                    handleNext()
                }, 400);
            }}
        >
            <Form>
                <h3>Payment Method</h3>

                <label htmlFor="account">Account No</label>
                <Field name="account" type="text" />
                <ErrorMessage name="account" />

                <br />

                <label htmlFor="date">Exp Date</label>
                <Field name="date" type="date" />
                <ErrorMessage name="date" />

                <br />

                <label htmlFor="cvv">CVV</label>
                <Field name="cvv" type="number" />
                <ErrorMessage name="cvv" />

                <br />


                <button type="submit" color="blue">Next</button>
            </Form>
        </Formik >
    );
};

export default FormTwo;