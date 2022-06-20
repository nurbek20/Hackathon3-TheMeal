import React from 'react';
import { useForm } from 'react-hook-form';
import services from '../../server/services';
import { useState } from "react";
import './login.css'

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    console.log(loading)
    const onSubmit = async (data) => {
        setLoading(true)
        const object = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        }
        await services.register(object)
            .then(response => {
                console.log(response)
                setLoading(false)
                reset()
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }
    return (
        <>
            <section>
                <div className='container'>
                    <div className='form__content'>
                        <div className='form'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input {...register("firstName", { required: 'not empty' })} className='input' placeholder='First Name' type="text" />
                                    {errors.firstName && <span>{errors.firstName.message}</span>}
                                </div>
                                <div>
                                    <input {...register("lastName", { required: 'not empty' })} className='input' placeholder='Last Name' type="text" />
                                    {errors.lastName && <span>{errors.lastName.message}</span>}
                                </div>
                                <div>
                                    <input {...register("email", { required: 'not empty' })} className='input' placeholder='Email' type="email" />
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                <div>
                                    <input {...register("password", { required: 'not empty', minLength: { value: 8, message: 'at least 8 characters' } })} className='input' placeholder='Password' type="password" />
                                    {errors.password && <span>{errors.password.message}</span>}
                                </div>
                                <button className='btnlogin' type='submit'>Регистрация</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;