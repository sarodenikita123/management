import React from 'react'
import { useForm } from react
import { Navigate } from 'react-router-dom';



function Add() {
    const { register, handleSubmit } = useForm();
    const navi = Navigate()

    function saveData(data) {
        axios.post('http://localhost:5000/users', data)
        navi('/show')
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(saveData)}>
                <lable html='n'>Name</lable>
                <input id='n' type='text' className='form-control'
                    {...register('name')} />
                <br></br>
                <lable html='e'>Email</lable>
                <input id='e' type='email' className='form-control'
                    {...register('email')} />
                <br></br>
                <lable html='c'>Contact</lable>
                <input id='c' type='number' className='form-control'
                    {...register('contact')} />
                <br></br>
                <lable html='a'>Address</lable>
                <input id='a' type='text' className='form-control'
                    {...register('adderess')} />
                <br></br>
                <lable html='ci'>City</lable>
                <input id='ci' type='text' className='form-control'
                    {...register('city')} />
                <br></br>
                <input type='submit' className='btn btn-primary' />
                <input type='reset' className='btn btn-warning' />
            </form>

        </div>
    )
}

export default Add