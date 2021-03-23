import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

import { imgUrl } from "../../lib/tmdb";

export default function Movie({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/search">
          <h4>Buscar Filmes</h4>
        </Link>

        <h2>{info.title}</h2>
        <p>{info.overview}</p>
        <img
          src={`${imgUrl}${info.backdrop_path}`}
          alt="Poster do Filme"
          width="100%"
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await result.json();

  return {
    props: {
      info: json.info
    },
  };
}
