import React from "react";

function Card(props) {
    const { title, email, backgroundColor, children } = props;
    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {email && <h1>{email}</h1>}
            {children}
        </div>
    );
}
export default Card;