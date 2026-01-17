import { useState } from "react";
import languages from "./assets/data/languages";

function App() {
    
    return (
        <>
            <h1>Learn Web Development</h1>
            <ul className="flex">
                {/* stampa in pagina i bottoni */}
                {languages.map((language, i)=>{
                    return <li key={i}><button>{language.title}</button></li>
                })}
            </ul>

            <div className="card">
                <h2>{languages[0].title}</h2>
                <p>{languages[0].description}</p>
            </div>
        </>
    )
}

export default App;
