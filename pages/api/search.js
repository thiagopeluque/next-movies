import { baseUrl, apiKey } from "../../lib/tmdb";

export default async (req, res) => {
  const result = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.movie}`);
  const json = await result.json();
  res.status(200).json({
    list: json.results,
  });
};
