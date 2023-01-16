import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../helpers/api";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);

  //1. useEffect to hook służący do podpinania się pod konkretny cykl życia komponentu.
  //2. Cykl życia komponentu: a-zamontowanie (wyświetlenie), b-zmiana jakiejś wartośći (moment w którym coś w komponencie się zmienia np. przychodzi jakiś nowy props lub aktualizuje się stan), c - odmontowanie (komponent znika z ekranu)
  //3. use Effect pptzyjmuje 2 argumenty: a - fynkcja wykonująca się w zadeklarowanym momencie życia, b- lista dependencji (argument opcjonalny) - brak listy dependencji = UE będzie strzalało jak zwykła fuckcja; - pusta lista dependencji = strzał tylko przy zamontowaniu (dzieje się to tylko raz)

  const API_KEY = "53e30f62454d4a1691cf7dbc0db12877";
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  useEffect(() => {
    axios
      .get(
        `https:newsapi.org/v2/everything?q=world&language=eng&sortBy=popularity&from=${year}-${
          month < 10 ? `0${month}` : month
        }-${day - 1}&apiKey=${API_KEY}`
      )
      .then((data) => {
        console.log(data.data.articles);
        setTodaysArticles(data.data.articles);
      });
  }, []);

  // Fetch + UseEfect to nie jest najlepszy sposób na komunikację z API w Reactcie, alternatywą jest React Query!! Ten sposób jest mimo wszystko OK

  return (
    <Typography
      variant="h2"
      align="center"
      sx={{ fontSize: "2rem", marginTop: "0.8rem" }}
    >
      To jest Home Page
    </Typography>
  );
};

export default HomePage;
