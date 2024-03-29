import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { postScheme } from './post.scheme';
import { create } from '../services/post.service';
import { useHistory } from 'react-router-dom';

export default function PostCreate() {
    const history = useHistory();

    async function submit(values) {
        try {
            await create(values);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="Register">
            <Formik
                initialValues={{ body: '', image: null }}
                validationSchema={postScheme}
                onSubmit={submit}>
                {({ setFieldValue }) => (
                    <Form>
                        <div className="form-group">
                            <input type="file" name="image" onChange={e => {
                                setFieldValue('image', e.currentTarget.files[0]);
                            }} />
                            <div className="error">
                                <ErrorMessage name="image" />
                            </div>
                        </div>
                        <div className="form-group">
                            <Field id="body" name="body" placeholder="Write a post" />
                            <div className="error">
                                <ErrorMessage name="body" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn-register">Create Post</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
