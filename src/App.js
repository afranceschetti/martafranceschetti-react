import logo from './logo.svg';
import './App.css';
import React, { Component, Suspense } from 'react';
import 'bulma/css/bulma.min.css';
import { withTranslation } from 'react-i18next';
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

class MainApp extends Component {

  changeLanguage(lang) {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  }

  render() {
    const { t } = this.props;
    return (
      <HashRouter>
        <div>
          {<h1>{t('Welcome to React')}</h1>}
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><button href onClick={() => this.changeLanguage("it-IT")}>It</button></li>
            <li><button onClick={() => this.changeLanguage("en-EN")}>EN</button></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    )
  }
}

const MainAppTranslated = withTranslation()(MainApp)

export default function App() {
  return (
    <Suspense fallback="loading">
      <MainAppTranslated />
    </Suspense>
  );
}
