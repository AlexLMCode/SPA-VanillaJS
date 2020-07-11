const Character = () => {
    const view = `
        <div class="character-inner">
            <article class="character-card">
                <img src="imagen" alt="name">
                <h2>Name</h2>
            </article>
            <article class="character-card">
                <h3>Episodios:</h3>
                <h4>Status:</h4>
                <h4>Species:</h4>
                <h4>Gender:</h4>
                <h4>Origen:</h4>
                <h4>Last Location:</h4>
            </article>
        </div>
    `;
    return view;
}

export default Character;