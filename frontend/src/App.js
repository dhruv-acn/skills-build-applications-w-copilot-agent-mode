import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Activities from "./components/Activities";
import Leaderboard from "./components/Leaderboard";
import Teams from "./components/Teams";
import Users from "./components/Users";
import Workouts from "./components/Workouts";
import "./index.css"; // custom overrides if any


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" end className="navbar-brand">
            OctoFit
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/activities" className="nav-link">
                  Activities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/workouts" className="nav-link">
                  Workouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teams" className="nav-link">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/leaderboard" className="nav-link">
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <main className="main-view container mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <div className="card p-4">
                  <h1>Welcome to OctoFit Tracker</h1>
                  <p>Select a section from the navigation above.</p>
                </div>
              }
            />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
