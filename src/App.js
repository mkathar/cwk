import Welcome from "./components/Welcome";
import Search from "./components/Search";
import Films from "./components/Films";
import Support from "./components/Support";
import SSS from "./components/SSS";
import { api } from "./api/service";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    populerApi();
  }, []);

  const populerApi = () => {
    api()
      .get("/3/tv/popular?api_key=cac36baa49a97934e31785f8b7b03b15")
      .then((response) => {
        setPopular(response.data.results);
        console.log("R:", response.data.results);
      });
  };
  let a = "ömer";
  return (
    <div className="bg-black">
      <Welcome popular={popular} />
      <Search />
      <Films popular={popular} a={a} />
      <Support />

      <SSS />
      <Detail popular={popular} />
    </div>
  );
}

export default App;
