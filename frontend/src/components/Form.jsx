
import React, { useState } from 'react'

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Form = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    const SubmitHandler = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/register`, { userName, email, phoneNumber, address, gender })
            setAddress("")
            setAgree(false)
            setEmail("")
            setGender("")
            setPhoneNumber("")
            setUserName("")
            toast.success("User registered successfully");
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex justify-around p-16 flex-wrap bg-black items-center pt-4 '>
            <div className='flex flex-col text-center md:text-start justify-center h-full lg:pl-24 w-full lg:w-1/2'>
                <h1 className='text-3xl sm:text-5xl  md:text-7xl text-white font-semibold mb-6 '>Registration Form</h1>
                <p className='text-zinc-300 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At impedit illo dolor dolore consectetur similique veritatis sed, hic, ipsum labore suscipit facilis vero praesentium, odio natus tempora quo. Ea, nihil.</p>
            </div>
            <div className='p-10 w-full lg:w-1/2 pt-6 max-h-max'>
                <div className='w-full p-8 border-2 border-blue-300 rounded-xl shadow- shadow-white bg-transparent'>
                    <h2 className='text-center text-3xl  text-white'></h2>
                <form action="" onSubmit={SubmitHandler}>
                    <h3 className='text-lg mb-1 text-white'>Username</h3>
                    <input type="text"
                        name='userName'
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        value={userName}
                        placeholder='Enter your name'
                        className='p-2 rounded-xl border w-full text-white bg-transparent focus:text-white focus:border-blue-400 outline-none mb-4'
                        required
                    />
                    <h3 className='text-lg mb-2 text-white'>Email</h3>
                    <input type='email'
                        name='email'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        placeholder='Enter your email'
                        className='p-2 rounded-xl border w-full bg-transparent text-white focus:text-white focus:border-blue-400 outline-none mb-4'
                        required
                    />
                    <h3 className='text-lg mb-2 text-white'>Phone Number</h3>
                    <input type="text"
                        name='phoneNumber'
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        value={phoneNumber}
                        placeholder='Enter your phone Number'
                        className='p-2 rounded-xl border w-full bg-transparent text-white focus:text-white focus:border-blue-400 outline-none mb-4'
                        required
                    />
                    <h3 className='text-lg mb-2 text-white'>Address</h3>
                    <input type="text"
                        name='address'
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        value={address}
                        placeholder='Enter your address'
                        className='p-2 rounded-xl border w-full bg-transparent text-white focus:text-white focus:border-blue-400 outline-none mb-4'

                    />
                    <h3 className='text-lg mb-2 text-white'>Gender</h3>
                    <select name="gender"
                        value={gender}
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                        className='p-2 rounded-xl border w-full bg-transparent 
                    text-white focus:text-white focus:bg-black  focus:border-blue-400 outline-none mb-4 '
                        id=""
                        required
                    >
                        <option value="">select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox"
                            name='agree'
                            onChange={(e) => {
                            setAgree(e.target.value);
                        }}
                            value={agree}
                            className='w-5 h-5 rounded focus:ring-2 focus:ring-blue-400 accent-blue-600'
                            required
                        />
                        <label htmlFor="agree" className='text-white'>I agree to the <span className="underline cursor-pointer hover:text-blue-900">terms and conditions</span></label>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className='text-white px-6 py-2 border-2 border-blue-600 bg-blue-600 hover:bg-transparent  transition rounded-md text-md'>Submit</button>
                    </div>

                </form>
                </div>
            </div>
            
        </div>
    )
}

export default Form