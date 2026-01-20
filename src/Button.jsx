function Button({ languages, setSelectedButton, selectedButton }) {
    return (
        <>
            {/* Stampa in pagina i bottoni */}
            {languages.map((language, i) => {
                return (
                    <li key={i}>
                        <button
                            className={selectedButton === i ? "selected" : null}
                            onClick={() => {
                                setSelectedButton(i);
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
