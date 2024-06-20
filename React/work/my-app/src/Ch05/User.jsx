import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    titleText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
};

function User(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.contentContainer}>
                <span style={styles.titleText}>{props.title}</span>
                <span style={styles.nameText}>{props.name}</span>
                <img style={styles.image}>{props.src}</img>
            </div>
        </div>
    );
}

export default User;