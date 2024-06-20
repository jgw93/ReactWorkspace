import React from "react";

// function StudentList(props) {
//     return (
//         <div>
//             <h2>{`학번은 ${props.num}이고, 이름은 ${props.name}이며, ${props.department}전공입니다.`}</h2>
//         </div>
//     );
// }
// export default StudentList;

function StudentList(props) {
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h2',
                null,
                `학번은 ${props.num}이고, 이름은 ${props.name}이며, ${props.department}전공입니다.`
            )
        ]
    );
}
export default StudentList;