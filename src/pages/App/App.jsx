import { useState } from "react";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import MovieListPage from "../MovieListPage/MovieListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import NavBar from "../../components/NavBar";

export default function App() {
  const [user, setUser] = useState(null) // seeing whether logged in is true or false


  function handleLogin(username){
    setUser((`${username}`))
  }

  return (
    <div className="mainPage">
      <BrowserRouter>
        <NavBar />
        <main className="App">
          {user ? (
            <>
              <div>Hey {user}</div>
              <Routes>
                <Route path="/" element={<MovieListPage />} />
                <Route
                  path="/movies/:movieName"
                  element={<MovieDetailPage />}
                />
                <Route path="/actors" element={<ActorListPage />} />
              </Routes>
            </>
          ) : (
            <LoginPage onLogin={handleLogin} />
          )}
        </main>
      </BrowserRouter>
    </div>
  );
}

