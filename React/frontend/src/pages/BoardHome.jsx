import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BoardHome() {
    const [boards, setBoards] = useState([]);

    const loadBoards = async () => {
        const result = await axios.get('http://localhost:8082/boards');
        setBoards(result.data);
        // console.log(result);
    }

    const deleteBoard = async (bno) => {
        if (window.confirm(`${bno}번 게시물을 삭제하시겠습니까?`)) {
            await axios.delete(`http://localhost:8082/board/${bno}`);
            loadBoards();
        }
    };

    useEffect(() => {

        loadBoards();
    }, []);


    return (
        <div className="container">
            <table className="table border shadow my-4">
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>제목</th>
                        <th scope='col'>작성자</th>
                        <th scope='col'>작성일</th>
                        <th scope='col'>조회수</th>
                        <th scope="col">기능</th>
                    </tr>
                </thead>
                {boards.map((board, index) => (
                    <tr key={index}>
                        <th>{board.bno}</th>
                        <td>{board.title}</td>
                        <td>{board.author}</td>
                        <td>{board.createTime}</td>
                        <td>{board.hit}</td>
                        <td>
                            <Link to={`viewboard/${board.bno}`} className="btn btn-outline-secondary mx-2">보기</Link>
                            <Link to={`/editboard/${board.bno}`} className="btn btn-outline-warning mx-2">수정</Link>
                            <button onClick={() => deleteBoard(board.bno)} className="btn btn-outline-danger mx-2">삭제</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default BoardHome;