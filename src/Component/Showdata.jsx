import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Showdata.css';

export default function Showdata() {
    const location = useLocation();
    const navigate = useNavigate();


    const [data, setData] = useState(() => {

        const passedData = location.state?.data;
        if (passedData) {
            return passedData;
        }


        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const homeBtn = () => {
        navigate("/");
    };

    const handleDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
    };

    return (
        <div className="showdata-container">
            <h1 className='Data'>Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : ""}
                </tbody>
            </table>
            <button className='home-btn' onClick={homeBtn}>Home</button>
        </div>
    );
}