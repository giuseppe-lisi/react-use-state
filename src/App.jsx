import { useState } from "react";
import languages from "./assets/data/languages";

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
                                className={selectedButton === i ? "selected" : null}
                                onClick={() => {
                                    changeCard(
                                        language.title,
                                        language.description,
                                        i
                                    );
                                }}
                            >
                                {language.title}
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Card Div */}
            <div className="card">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </>
    );
}

export default App;
