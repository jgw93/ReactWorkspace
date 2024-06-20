import React from "react";
import StudentList from "./StudentList";

function Student(props){
    return(
        <div>
            <StudentList num={1} name="홍기동" department="경영학과" />
            <StudentList num={2} name="박성언" department="컴공" />
            <StudentList num={3} name="유다인" department="멀티미디어" />
        </div>
    );
}
export default Student;