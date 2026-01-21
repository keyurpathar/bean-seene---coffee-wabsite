    import React from 'react'
    import { Link, useNavigate } from 'react-router-dom'
    import { FcGoogle } from "react-icons/fc";
    import { FaApple } from "react-icons/fa";
    import { FaFacebook } from "react-icons/fa";
    import { useFormik } from 'formik';
    import * as yup from 'yup'

    const SignIn = () => {

        let navigate = useNavigate()

        const validationSchema = yup.object({
            email: yup.string()
                .email()
                .required(),
            password: yup.string()
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                .required()
        })

        const formik = useFormik({
            initialValues: {
                email: '',
                password: ''
            },
            validationSchema,
            onSubmit: (val ,{resetForm}) => {
                console.log(val);
                resetForm()
                sessionStorage.setItem('isLogin' , 'true')
                navigate('/menu')

            }
        })
        return (
            <div className='flex justify-center items-center h-screen ' id='loginpage'>
                <form onSubmit={formik.handleSubmit} className=' w-fit p-4 px-10 flex flex-col gap-3 rounded-2xl backdrop-blur-2xl text-white text-center'>

                    <h2 className='text-3xl my-3 font-semibold play'>Sign In</h2>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter E-mail'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className='border w-60 rounded px-1 h-8 cursor-pointer' />

                        {formik.touched.email &&
                            formik.errors.email &&
                            <p className='capitalize text-red-600 font-semibold my-1'>{formik.errors.email}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Enter Password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className='border w-60 rounded px-1 h-8 cursor-pointer'
                        />
                        {formik.touched.password &&
                            formik.errors.password &&
                            <p className='capitalize text-red-600 font-semibold my-1'>{formik.errors.password}</p>}
                    </div>

                    <div>
                        <p className='text-right text-sm -mt-3'>Forget password??</p>
                    </div>


                    <div>
                        <button
                            type='submit'
                            className='cursor-pointer w-60 rounded px-1 h-8 bg-green-600 text-white font-medium active:bg-green-700'
                        >Submit</button>
                    </div>

                    <div>
                        <p className='text-sm text-gray-400'>No Account ?? <Link className='underline text-white' to={'/signup'}>Sign Up</Link></p>
                    </div>

                    <div className='flex justify-evenly text-2xl '>
                        <FcGoogle className='cursor-pointer' />
                        <FaApple className='cursor-pointer' />
                        <FaFacebook color='blue' className='cursor-pointer' />
                    </div>
                </form>
            </div>
        )
    }

    export default SignIn
