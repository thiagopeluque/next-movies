import React, { useState } from "react";
import Head from "next/head";

import { imgUrl } from "../lib/tmdb";

export default function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const result = await fetch(
      `http://localhost:3000/api/search?movie=${search}`
    );
    const json = await result.json();
    setMovies(json.list);
  };

  return (
    <div>
      <Head>
        <title>NextJS Movies | Busca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Buscar Filmes</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="submit"
          value="Buscar Filme"
          onClick={handleSearch}
        />
        <hr />
        {movies.map((item) => (
          <ul>
            <a href={`/movie/${item.id}`}>
              <li>
                <img
                  src={`${imgUrl}${item.poster_path}`}
                  alt={item.title}
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
