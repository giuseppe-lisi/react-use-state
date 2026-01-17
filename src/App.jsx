import { useState } from "react";
import languages from "./assets/data/languages";


function App() {

    function changeCard(newTitle, newDesc) {
        setTitle(newTitle);
        setDesc(newDesc);
    }
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("nessun linguaggio selezionato");

    return (
        <>
            <h1>Learn Web Development</h1>
            <ul className="flex">
                {/* stampa in pagina i bottoni */}
                {languages.map((language, i)=>{
                    return <li key={i}><button onClick={() => {changeCard(language.title, language.description)}}>{language.title}</button></li>
                })}
            </ul>

            <div className="card">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default App;
