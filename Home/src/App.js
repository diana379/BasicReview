import React from 'react';
import {MovieState} from "./Context/MovieContext";
import './App.css';
import Hero from './components/Hero/Hero'

const App = () => {
    return (
        <MovieState>
            <Hero />
        </MovieState>

    );
}

export default App;