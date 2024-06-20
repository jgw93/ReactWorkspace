import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewUser() {
    const { id } = useParams();

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
    });
    const { name, username, email } = user;

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8082/user/${id}`);
        setUser(result.data)
    };
    useEffect(() => {
        loadUser();
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">유저 정보</h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text">이름</span>
                        <input value={name} type="text" className="form-control" id="name" name="name" readOnly />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">유저 네임</span>
                        <input value={username} type="text" className="form-control" id="username" name="username" readOnly />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">이메일</span>
                        <input value={email} type="text" className="form-control" id="email" name="email" readOnly />
                    </div>
                    <div className="mb-3 text-center">
                        <Link to="/" type="submit" className="btn btn-outline-danger px-2 mx-2">돌아가기</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewUser;