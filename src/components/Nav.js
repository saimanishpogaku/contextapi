import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const navStyle = {
        backgroundColor: "grey",
        height: "8vh",
        width: "100%",
        display: "inline-block" //removes space between its siblings div
    }

    const ListStyle = {
        float: "left",
        listStyleType: "none",
        padding: "10px",
        color: "white"
    }
    return (
        <div style={navStyle}>
            <ul>
                <li style={ListStyle}><Link to="/" style={{ color: "white" }}>Home</Link></li>
                <li style={ListStyle}><Link to="/about" style={{ color: "white" }}>About</Link></li>
                <li style={ListStyle}><Link to="/profile" style={{ color: "white" }}>profile</Link></li>
                <li style={ListStyle}><Link to="/posts" style={{ color: "white" }}>Posts</Link></li>
                <li style={ListStyle}><Link to="/shop" style={{ color: "white" }}>Shop</Link></li>
            </ul>
        </div >
    )
}