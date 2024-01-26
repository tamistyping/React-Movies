import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
// import ActorListPage from "../ActorListPage/ActorListPage";
// import MovieListPage from "../MovieListPage/MovieListPage";
// import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
// import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState("") // seeing whether logged in is true or false


  function handleLogin(username){
    setUser((`${username}`))
  }

  return (
    <main className='App'>
      {user ? <div>Hey {user}</div> : <LoginPage onLogin={handleLogin} />}
    </main>
  )
}

