import React from "react";
import Comment from "./Comment";

const Comments = [
    {
        name: "이인제",
        comment: "안녕하세요.",
    },
    {
        name: "유재석",
        comment: "반갑습니다.",
    },
    {
        name: "유인나",
        comment: "반가워요.",
    },
    {
        name: "ㅎㅇ",
        comment: "ㅂㅇ",
    },
]

function CommentList(props) {
    return (
        <div>
            {Comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}
export default CommentList;