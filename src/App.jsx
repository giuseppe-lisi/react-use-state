import { useState } from "react";
import languages from "./assets/data/languages";
import Card from "./Card";
import Button from "./Button";

function App() {
    const [selectedButton, setSelectedButton] = useState(0);

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
                title={languages[selectedButton].title}
                desc={languages[selectedButton].description}
            />
        </>
    );
}

export default App;
