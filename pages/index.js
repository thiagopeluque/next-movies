import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { imgUrl } from '../lib/tmdb';

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Filmes em Destaque da Semana</h2>
        <Link href="/search">
          <h4>Buscar Filmes</h4>
        </Link>

        {list.map((item) => (
          <ul>
            <a href={`/movie/${item.id}`}>
              <li>
                <img
                  src={`${imgUrl}${item.poster_path}`}
                  alt="Poster do Filme"
                  width={250}
                />
                <h4>{item.title}</h4>
              </li>
            </a>
          </ul>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps(){

  const result = await fetch(`http://localhost:3000/api/trending`);
  const json = await result.json();

  return{
    props:{
      list: json.list
    }
  }
}
