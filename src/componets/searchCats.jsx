import React,{ useEffect, useState } from "react";
import GetGif from './getGif';
import './searchCats.css';


export default function SearchCats() {
    const [dataCat, setDataCat] = useState({});
    const url = 'https://catfact.ninja/fact';

    useEffect(() => { 
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataCat(data);
                console.log(data.fact);
            });
    },[url]);      
   
    const fact = dataCat.fact? dataCat.fact.split(' ').slice(0,3).join(' '): '';
    
    return (
        <div id="container">
           
            <div id="content">
                <p id="dataCat">{dataCat.fact ? dataCat.fact : 'Loading...'}</p>
                <div id="gif">
                    {dataCat.fact && <GetGif fact={fact} />}
                </div>
            </div>
            
        </div>
    );
};