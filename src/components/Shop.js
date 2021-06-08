import React from 'react';
import { useEffect, useState } from 'react';

export default function Shop(props) {
    const [photos, setPhotos] = useState([]);
    const fetchItems = async () => {
        const response = await fetch('https://api.unsplash.com/photos/?client_id=0Zmhdk-7yaZHGrZpAJRwo0nfTxAZ9lC1uTG0POxwKnA').then((res) => res.json());
        setPhotos(response);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    const pics = photos.map((p) => (
        <img src={`${p.urls.thumb}`} alt="Not-Found"></img>
    ))
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Shop now</h1>
            {pics}
        </div>
    )
}