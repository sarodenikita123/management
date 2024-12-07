    import { useEffect } from 'react';
    import axios from 'axios';
    import { useForm } from 'react-hook-form';
    import { useParams, useNavigate } from 'react-router-dom';

    function Edit() {
        const { register, handleSubmit, setValue } = useForm();
        const { userId } = useParams();
        const navi = useNavigate();

        async function fetchData() {
            const result = await axios.get(`http://localhost:5000/users/${userId}`)
            setValue('roll', result.data.roll);
            setValue('name', result.data.name);

        }

        function saveData(data) {
            axios.put(`http://localhost:5000/users/${userId}`, data)
            navi('/show')
        }

        useEffect(() => {
            fetchData();
        }, [])

        return (
            <div>
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

            </div >
        
        )
    }

    export default Edit
