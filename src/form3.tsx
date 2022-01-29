import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    handleNext: () => void
}

const FormThree: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object({
                review: Yup.string()
                    .min(10, 'Must be 10 character or greater')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext()
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="review">review</label>
                <Field name="review" type="text" />
                <ErrorMessage name="review" />
                <br />
                <FormControlLabel
                    control={<Checkbox color="primary" name="saveAddress" value="yes" />}
                    label="Use this address for payment details"
                />
                <br />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormThree;