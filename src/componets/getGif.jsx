import React,{ useEffect, useState } from "react";

export default function GetGif({fact}) {
    const api_key = 'efGhPGh68ZpcxSCUG29TDGcCQhgvqf9T';
    const url = `https://api.giphy.com/v1/gifs/search?q=${fact}&api_key=${api_key}`;
    const [dataGif, setDataGif] = useState();
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataGif(data.data[0].images.original.url);
            });
    },[url]);
    return (
        <div>
            <img src={dataGif} alt="gif" />
        </div>
    )

}