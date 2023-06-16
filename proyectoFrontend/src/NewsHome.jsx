import { useEffect, useState } from "react";
import "./NewsHome.css";

const NewsHome = () => {
  const [news, setNews] = useState([
    {
      title: "Noticia 1",
      content: "Contenido de la noticia 1",
    },
    {
      title: "Noticia 2",
      content: "Contenido de la noticia 2",
    },
    {
      title: "Noticia 3",
      content: "Contenido de la noticia 3",
    },
  ]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5173/noticias");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      {news.length === 0 ? (
        <p>No se encontraron noticias.</p>
      ) : (
        <ul>
          {news.map((item, index) => (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NewsHome;
