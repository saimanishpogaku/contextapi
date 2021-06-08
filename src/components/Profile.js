import React from 'react';

export default function Profile(props) {
    const profileDiv = {
        padding: "2%",
        width: "60%",
        backgroundColor: "black",
        color: "white",
        height: "30vh",
        borderRadius: "6px",
        margin: "auto"
    }

    const profilepage = {
        width: "100%",
        backgroundColor: "yellow"
    }
    return (
        <div style={profilepage}>
            <h1 style={{ textAlign: "center" }}>Profile</h1>
            <table style={profileDiv}>
                <tr>
                    <td>Name:</td>
                    <td>Saimanish Pogaku</td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Interested in:</td>
                    <td>NodeJs,React Js,Linux and Shell Scripting,AWS,Networking,Docker,Python,MongoDB,MySQL,HTML and CSS</td>
                </tr>
            </table>
        </div>
    )
}