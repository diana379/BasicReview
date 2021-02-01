import React, { useState } from 'react';
import {MovieState} from "./Context/MovieContext";
import './App.css';
import Hero from './components/Hero/Hero';
import Cart from './Cart';



const App = () => {
    

    return (
        <MovieState>
            <Hero />
        </MovieState>

        


    );
}

export default App;