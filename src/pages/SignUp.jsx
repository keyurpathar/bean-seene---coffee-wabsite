import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    let navigate = useNavigate()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validationSchema = yup.object({
        fullname: yup.string()
            .required(),

        email: yup.string()
            .email('enter valid email')
            .required(),

        number: yup.string()
            .matches(phoneRegExp, 'enter valide Phone number')
            .min(10)
            .required(),

        age: yup.number()
            .min(18, 'only allowed who are 18+')
            .required(),

        gender: yup.string()
            .required("Gender is required"),

        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

        conpassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required()
    })




    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            number: '',
            age: '',
            gender: '',
            password: '',
            conpassword: '',
        },
        validationSchema,
        onSubmit: (val, { resetForm }) => {
            console.log(val);
            resetForm()
            sessionStorage.setItem('isLogin' , 'true')
            navigate('/menu')

            document.querySelector('#sbmtbtn').textContent = 'Submitted'
        }
    })

    return (
        <div className='h-screen  flex flex-col  justify-center items-center gap-4 ' id='signup'>
            <div className='flex backdrop-blur-3xl flex-col gap-3 w-fit text-center px-10 py-6 rounded-2xl  text-white'>
                <p className='text-3xl play font-semibold mb-3'>Sign Up</p>
                <form className='flex flex-col gap-2 ' onSubmit={formik.handleSubmit}>

                    <div>
                        <input
                            className='border rounded px-1 w-60 h-8 cursor-pointer'
                            placeholder='Enter Full Name'
                            type="text"
                            name="fullname"
                            id="fullname"
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                        />

                        {formik.touched.fullname &&
                            formik.errors.fullname &&
                            <p className='capitalize text-red-600 font-semibold my-1 text-sm'>{formik.errors.fullname}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            name='email'
                            className='border rounded px-1 w-60 h-8 cursor-pointer'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                        {formik.touched.email &&
                            formik.errors.email &&
                            <p className='capitalize text-sm text-red-600 font-semibold my-1'>{formik.errors.email}</p>}

                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder='Enter Mobile Number'
                            name='number'
                            className='border rounded px-1 w-60 h-8 cursor-pointer'
                            onChange={formik.handleChange}
                            value={formik.values.number}
                        />

                        {formik.touched.number &&
                            formik.errors.number &&
                            <p className='capitalize text-sm text-red-600 font-semibold my-1'>{formik.errors.number}</p>}

                    </div>

                    <div className='flex justify-between items-center'>
                        <div>
                            <input
                                type="number"
                                name="age"
                                id="age"
                                min={18}
                                max={40}
                                placeholder='Enter Age'
                                onChange={formik.handleChange}
                                value={formik.values.age}
                                className='border rounded px-1 w-26 h-8 cursor-pointer'
                            />
                            {formik.touched.age &&
                                formik.errors.age &&
                                <p className='capitalize text-red-600 text-sm font-semibold my-1'>{formik.errors.age}</p>}
                        </div>
                        <div>
                            <select name='gender' onChange={formik.handleChange}
                                value={formik.values.gender} className='border  rounded px-1 w-32 h-8 cursor-pointer'>
                                <option value="" className='bg-gray-800'>Select Gender</option>
                                <option value="male" className='bg-gray-800'>Male</option>
                                <option value="female" className='bg-gray-800'>Female</option>
                            </select>

                            {formik.touched.gender &&
                                formik.errors.gender &&
                                <p className='capitalize text-red-600 text-sm font-semibold my-1'>{formik.errors.gender}</p>}

                        </div>
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Enter Password'
                            className='border rounded px-1 w-60 h-8 cursor-pointer'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.touched.password &&
                            formik.errors.password &&
                            <p className='capitalize text-red-600 text-sm font-semibold my-1'>{formik.errors.password}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="conpassword"
                            id="conpassword"
                            placeholder='Confirm Password'
                            className='border rounded px-1 w-60 h-8 cursor-pointer'
                            onChange={formik.handleChange}
                            value={formik.values.conpassword}
                        />
                        {formik.touched.conpassword &&
                            formik.errors.conpassword &&
                            <p className='capitalize text-red-600 text-sm font-semibold my-1'>{formik.errors.conpassword}</p>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            name='sbmtbtn'
                            id='sbmtbtn'
                            className='w-full rounded h-8 bg-green-600  font-semibold active:bg-green-800 cursor-pointer'
                        >Sign Up</button>
                    </div>

                    <div>
                        <p className='underline text-gray-400 cursor-pointer'>Can also Sign Up with </p>
                    </div>

                    <div className='flex justify-evenly text-2xl '>
                        <FcGoogle className='cursor-pointer' />
                        <FaApple className='cursor-pointer' />
                        <FaFacebook color='blue' className='cursor-pointer' />
                    </div>

                    <div>
                        <p className='text-gray-400 text-sm'>Already have an Acoount <Link className='underline text-white  ' to={'/signin'}> Login Here </Link> </p>
                    </div>



                </form>
            </div>
        </div>
    )
}


export default SignUp
