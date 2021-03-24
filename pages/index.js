import Head from "next/head";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Image,
  Jumbotron,
  Carousel,
  Badge
} from "react-bootstrap";

import { imgUrl } from "../lib/tmdb";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title> NextJS Movies </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">NextJS Movies</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/search">Buscar Filmes</Nav.Link>
        </Nav>
      </Navbar>

      {/* Carousel */}
      <Carousel>
        {list.map((item) => (
          <Carousel.Item>
            <img className="w-100" src={`${imgUrl}${item.backdrop_path}`} />
            <Carousel.Caption className="mb-4">
              <h1 className="mb-3">
                <Badge variant="warning">{item.title}</Badge>
              </h1>
              <h4>{item.overview}</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      {/* Content */}
      <Container>
        
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const result = await fetch(`http://localhost:3000/api/trending`);
  const json = await result.json();

  return {
    props: {
      list: json.list,
    },
  };
}
