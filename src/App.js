import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {API_URL} from './constants';
import './App.css';
import HomeComponent from "./components/home";

function App() {
    const link = API_URL;
    return (
        <div className="App">
            <Header/>
            <HomeComponent/>
            <Footer link={link}/>
        </div>
    );
}

export default App;
