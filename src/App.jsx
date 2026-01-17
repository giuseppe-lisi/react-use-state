import { useState } from "react";
import languages from "./assets/data/languages";
import Card from "./Card";
import Button from "./Button";

function App() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("nessun linguaggio selezionato");
    const [selectedButton, setSelectedButton] = useState(null);

    return (
        <>
            <h1>Learn Web Development</h1>

            <ul className="flex">
                {/* Stampa in pagina i bottoni
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
                })} */}
                <Button
                    languages={languages}
                    setTitle={setTitle}
                    setDesc={setDesc}
                />
            </ul>

            <Card title={title} desc={desc} />
        </>
    );
}

export default App;
