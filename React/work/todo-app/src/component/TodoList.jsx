import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useMemo } from "react";


const TodoList = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    };

    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) =>
                it.content.toLowerCase().includes(search.toLowerCase())
            );
    };

    const analyzeTodo = useMemo(() => {
        console.log("analyzeTodo() 호출");
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount
        };
    },[todo]);
    const { totalCount, doneCount, notDoneCount } = analyzeTodo; //analyzeTodo();

    return (
        <div className="TodoList">
            <h4>Todo List 🔍</h4>
            <div>
                <div>총 개수 : {totalCount}</div>
                <div>완료된 개수 : {doneCount}</div>
                <div>완료되지 않은 개수 : {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                className="searchbar"
                placeholder="검색어를 입력하세요." />
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id}{...it}
                        onUpdate={onUpdate}
                        onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}
export default TodoList;