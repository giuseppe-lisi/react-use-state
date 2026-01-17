import { useState } from "react";
import languages from "./assets/data/languages";
import Card from "./Card";

function App() {
    
    function changeCard(newTitle, newDesc, button) {
        setTitle(newTitle);
        setDesc(newDesc);
        setSelectedButton(button);
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("nessun linguaggio selezionato");
    const [selectedButton, setSelectedButton] = useState(null);

    return (
        <>
            <h1>Learn Web Development</h1>

            <ul className="flex">
                {/* Stampa in pagina i bottoni */}
                {languages.map((language, i) => {
                    return (
                        <li key={i}>
                            <button
                                className={
                                    selectedButton === i ? "selected" : null
                                }
                                onClick={() => {
                                    changeCard(
                                        language.title,
                                        language.description,
                                        i,
                                    );
                                }}
                            >
                                {language.title}
                            </button>
                        </li>
                    );
                })}
            </ul>

            <Card title={title} desc={desc}/>
        </>
    );
}

export default App;
