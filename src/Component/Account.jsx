import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./account.css";

export default function Account() {
    const [items, setItems] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    });

    const navigate = useNavigate();


    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.name) {
            alert("Please Enter Name");
            return;
        }
        if (inputValue.name.length <= 2) {
            alert("Enter More Than 2 Characters in Name");
            return;
        }
        if (!inputValue.email) {
            alert("Please Enter Email");
            return;
        }
        if (!inputValue.email.includes("@")) {
            alert("Enter A Valid Email Address");
            return;
        }
        if (!inputValue.password) {
            alert("Please Enter a Password");
            return;
        }
        if (inputValue.password.length <= 8) {
            alert("Enter More Than 7 Characters in Password");
            return;
        }

        setItems((prevItems) => {
            const newItems = [...prevItems, inputValue];
            localStorage.setItem("data", JSON.stringify(newItems));
            return newItems;
        });


        setInputValue({
            name: "",
            email: "",
            password: "",
            gender: "",
        });

        alert("Form is Submitted");
    };


    const handleNavigate = () => {
        navigate('/data', { state: { data: items } });
    };

    return (
        <>
            <form className='Form' onSubmit={handleSubmit}>
                <h2 className='name8'>Form</h2>
                <div className='name1'>
                    <label>
                        Name:
                        <input
                            type="text"
                            placeholder='Enter Name'
                            value={inputValue.name}
                            name='name'
                            onChange={handleInput}
                        />
                    </label>
                </div>
                <div className='name2'>
                    <label>
                        Email Id:
                        <input
                            type="email"
                            placeholder='Enter Email'
                            value={inputValue.email}
                            name='email'
                            onChange={handleInput}
                        />
                    </label>
                </div>
                <div className='name4'>
                    <label>
                        Password:
                        <input
                            type="password"
                            placeholder='Enter Password'
                            value={inputValue.password}
                            name='password'
                            onChange={handleInput}
                        />
                    </label>
                </div>
                <div className='name5'>
                    <label>
                        <input
                            type="radio"
                            id='male'
                            value="Male"
                            name='gender'
                            checked={inputValue.gender === 'Male'}
                            onChange={handleInput}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            id='female'
                            value="Female"
                            name='gender'
                            checked={inputValue.gender === 'Female'}
                            onChange={handleInput}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            id='other'
                            value="Other"
                            name='gender'
                            checked={inputValue.gender === 'Other'}
                            onChange={handleInput}
                        />
                        Other
                    </label>
                </div>
                <div className='name7'>
                    <button type="submit">Submit Form</button>
                    <button type="button" onClick={handleNavigate}>Go to Data</button>
                </div>
            </form>
        </>
    );
}