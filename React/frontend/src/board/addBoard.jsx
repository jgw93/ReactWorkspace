import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddBoard() {
    let navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        content: '',
        author: '',
    });

    const { title, content, author } = board;

    const onInputChange = (e) => {
        setBoard({
            ...board,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8082/board', board);
        navigate('/');
    };
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">게시글 작성</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">제목</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={title}
                                onChange={onInputChange}
                                placeholder="제목 입력"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">작성자</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                name="author"
                                value={author}
                                onChange={onInputChange}
                                placeholder="작성자 입력"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">내용</label>
                            <textarea
                                className="form-control"
                                id="content"
                                name="content"
                                value={content}
                                onChange={onInputChange}
                                style={{ height: '300px' }}
                                placeholder="내용 입력"
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-primary px-2 mx-2">작성</button>
                            <Link to="/" className="btn btn-outline-danger px-2 mx-2">취소</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddBoard;
