import { Layout, Breadcumb } from '../../_components'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Router from 'next/router'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { accountService } from '../../_services';
import { toast, ToastContainer } from 'react-toastify';


export default function Products() {

    useEffect(() => {
        const user = accountService.userValue()
        if (user) {
            console.log(accountService.userValue)
            Router.push('/')
        }
    }, []);

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    function onSubmit({ email, password }, { setSubmitting }) {
        accountService.login(email, password)
            .then(() => {
                Router.back()
            })
            .catch(error => {
                toast.error(error, {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setSubmitting(false);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => (
            <Layout>
                <Breadcumb
                    links={[
                        { label: "Home", link:`/` },
                        { label: "login", link:`/login` },
                    ]}
                
                /> 
                <div class="container">
                    <div class="row">
                        <div  class="col-md-6">
                            <h1>BANNER HERE</h1>
                        </div>
                        <div class="col-md-6">
                            <div class="heading">
                                <h2 class="title">Login</h2>
                                <p>If you have an account with us, please log in. Or <Link  href="signup" as={`signup`}><a>create a new one</a></Link></p>
                            </div>
                
                            <Form action="#">
                                <label className="form-label">Email</label>
                                <Field name="email" type="email" placeholder="" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />

                                <label className="form-label">Password</label>
                                <Field name="password" type="password" placeholder="" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                
                                <div class="form-footer">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                        {isSubmitting ? "Loading..." : "Sign in"}
                                        
                                </button>
                                <a href="#" class="forget-pass"> Forgot your password?</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                
            </Layout>
        )}
        </Formik>
    )
}
