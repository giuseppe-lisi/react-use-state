function Button({ languages, setTitle, setDesc }) {
    function changeCard(newTitle, newDesc) {
        setTitle(newTitle);
        setDesc(newDesc);
    }

    return (
        <>
            {/* Stampa in pagina i bottoni */}
            {languages.map((language, i) => {
                return (
                    <li key={i}>
                        <button
                            onClick={() => {
                                changeCard(
                                    language.title,
                                    language.description
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
