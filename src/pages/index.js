import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "@/components/Card";

export async function getStaticProps() {
  const maxPokemons = 1008;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Lemores<span>Pokedéx</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokebola"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
        
        <h1 className={styles.title}>
                 Seja um Mestre Pokémon! <span> Temos que pegar !!!</span>
        </h1>
      </div>
      
    </>
  );
}
