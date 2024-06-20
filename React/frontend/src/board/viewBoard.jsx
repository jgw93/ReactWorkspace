import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewBoard() {
    const { bno } = useParams();

    const [board, setBoard] = useState({
        title: '',
        content: '',
        author: '',
        hit: '',
        createTime: ''
    });

    const { title, content, author, hit, createTime } = board;

    const loadBoard = async () => {
        const result = await axios.get(`http://localhost:8082/board/${bno}`);
        setBoard(result.data)
    };
    useEffect(() => {
        loadBoard();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">게시글 수정</h2>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">제목</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={title}
                            readOnly
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
                            readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">내용</label>
                        <textarea
                            className="form-control"
                            id="content"
                            name="content"
                            value={content}
                            style={{ height: '300px' }}
                            readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">조회수</label>
                        <input
                            className="form-control"
                            id="hit"
                            name="hit"
                            value={hit}
                            readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">생성일</label>
                        <input
                            className="form-control"
                            id="createTime"
                            name="createTime"
                            value={createTime}
                            readOnly
                        />
                    </div>
                    <div className="text-center">
                        <Link to="/" className="btn btn-outline-danger px-2 mx-2">돌아가기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ViewBoard;
