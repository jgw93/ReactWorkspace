import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
    });
    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8082/user', user);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">유저 가입</h2>
                    <form onSubmit={onSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text">이름</span>
                            <input onChange={onInputChange} type="text" className="form-control" id="name" name="name" placeholder="이름 입력" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">유저 네임</span>
                            <input onChange={onInputChange} type="text" className="form-control" id="username" name="username" placeholder="유저 네임 입력" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">이메일</span>
                            <input onChange={onInputChange} type="text" className="form-control" id="email" name="email" placeholder="이메일 입력" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-outline-primary px-2 mx-2">가입</button>
                            <Link to="/" type="submit" className="btn btn-outline-danger px-2 mx-2">취소</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddUser;