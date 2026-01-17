function Button({ languages, setTitle, setDesc, setSelectedButton, selectedButton }) {
    
    function changeCard(newTitle, newDesc, button) {
        setTitle(newTitle);
        setDesc(newDesc);
        setSelectedButton(button);
    }

    return (
        <>
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
        </>
    );
}

export default Button;
