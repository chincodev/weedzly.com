import { Layout, Breadcumb } from '../../_components'
import Router from 'next/router'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { accountService } from '../../_services';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask'

export default function Products() {

    React.useEffect(() => {
        const user = accountService.userValue()
        if (user) {
            Router.push('/')
        }
    }, []);


    const initialValues = {
        name: '',
        birthdate: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        acceptTerms: false
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        birthdate: Yup.string()
            .required('Birthdate is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.register(fields)
            .then(() => {
                Router.push('/login')
            })
            .catch(error => {
                setSubmitting(false);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting, handleChange, setFieldValue }) => (
                <Layout>
                    <Breadcumb
                        links={[
                            { label: "Home", link:`/` },
                            { label: "sign up", link:`/signup` },
                        ]}
                    /> 
                    <div class="container">
                        <div class="row">
                        <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <div class="heading">
                                    <h2 class="title">Create An Account</h2>
                                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                </div>

                                <Form>
                                    <label className="form-label">Name</label>
                                    <Field name="name" type="text" placeholder="Enter name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                    <ErrorMessage name="name" component="div" className="invalid-feedback" />

                                    <label className="form-label">Birthdate</label>
                                    <Field name="birthdate" type="date" className={'form-control' + (errors.birthdate && touched.birthdate ? ' is-invalid' : '')} />
                                    <ErrorMessage name="birthdate" component="div" className="invalid-feedback" />

                                    <label className="form-label">Phone number</label>
                                        <Field  name="phone"
											render={({ field, form, setFieldTouched }) => (
												<MaskedInput
                                                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                                  className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} 
                                    
                                                  {...field}
                                                  guide={true}
                                                
                                                  onBlur={setFieldTouched}
                                                  onChange={(e) => {
                                                    handleChange(e)
                                                    const value = e.target.value || '';
                                                    setFieldValue('phone', value);
                                                  }}
                                                />
											)}
											type="text"  
										/>
                                    <ErrorMessage name="phone" component="div" className="invalid-feedback" />

                                    {/* <h2 class="title mb-2">Login information</h2> */}

                                    <label className="form-label">Email</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />

                                    <label className="form-label">Password</label>
                                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    
                                    <label className="form-label">Confirm Password</label>
                                    <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />

                                    <div class="custom-control custom-checkbox">
                                        <Field type="checkbox" id="newsletter-signup" name="acceptTerms" className={'custom-control-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                        <label htmlFor="newsletter-signup" className=" custom-control-label form-check-label">Accept Terms & Conditions</label>
                                        <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                    </div>

                                    <div class="form-footer">
                                        <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block">
                                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Create new account
                                        </button>
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
