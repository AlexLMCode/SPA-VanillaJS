import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);

    const view = `
        <div class="character-inner">
            <article class="character-card">
                <img src="${character.image}" alt="foto de ${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="character-card">
                <h3>Episodes: <span>${character.episode.length}</span> </h3>
                <h4>Status: <span>${character.status}</span> </h4>
                <h4>Species: <span>${character.species}</span> </h4>
                <h4>Gender: <span>${character.gender}</span> </h4>
                <h4>Origen: <span>${character.origin.name}</span> </h4>
                <h4>Last Location: <span>${character.location.name}</span> </h4>
            </article>
        </div>
    `;
    return view;
}

export default Character;