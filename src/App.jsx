import { useState } from "react";
import languages from "./assets/data/languages";
import Card from "./Card";
import Button from "./Button";

function App() {
    const [selectedButton, setSelectedButton] = useState(null);

    return (
        <>
            <h1>Learn Web Development</h1>

            <ul className="flex">
                <Button
                    languages={languages}
                    setSelectedButton={setSelectedButton}
                    selectedButton={selectedButton}
                />
            </ul>

            <Card
                title={selectedButton != null ? languages[selectedButton].title : ""}
                desc={selectedButton != null ? languages[selectedButton].description : "nessun linguaggio selezionato"}
            />
        </>
    );
}

export default App;
