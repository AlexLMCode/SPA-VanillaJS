import getData from "../utils/getData";

const Home = async () => {

    const characters = await getData();

    const view = `
    <div class="characters__container container">
        ${characters.results.map(character => `
        <article class="character__item">
            <a href="#/${character.id}/">
              <img src="${character.image}" alt="${character.name}">
              <h2>${character.name}</h2>
            </a>
        </article>
      `).join('')}
    </div>
  `;
    return view;
};
//map me retorna un nuevo arreglo con una estructura especifica.
export default Home;
