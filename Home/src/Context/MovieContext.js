import React, { useState, createContext, useEffect } from "react";
// import Cart from "../Cart";
import Products from '../Products';


export const MovieContext = createContext();

export const MovieState = ({ children }) => {
   const API_KEY = "a2da2e68ea918056413407d9c9335957";

   const PAGE_PRODUCTS = 'products';
   const PAGE_CART = 'cart';

   const [isLoading, setIsLoading] = useState(false);
   const [hiddenMenu, setHiddenMenu] = useState(true);
   const [activeLink, setActiveLink] = useState("Popular");
   const [popularMovies, setPopularMovies] = useState([]);
   const [search, setSearch] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const [movies, setMovies] = useState([]);
   const [showPagination, setShowPagination] = useState(true);

   const getMovies = async () => {
      const response = await fetch(
         `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage}`
      );
   const data = await response.json();
   if(search.trim() === "") {
      setMovies(data);
   }
   };

   const handleSearch = async (e) => {
      e.preventDefault();
      if(search.trim === "") return;
      const searchResponse = await fetch (
         `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
         );
      const searchData = await searchResponse.json();
      setMovies(searchData);
      setShowPagination(false);
      };

      const newPage = (direction) => {
         if(direction === "next") {
            setCurrentPage((prevCurrent) => prevCurrent + 1);
            setIsLoading(true);
         } else if (direction === "previous" && currentPage !==1) {
            setCurrentPage((prevCurrent) => prevCurrent -1);
         }
      }
   

   const getPopularMovies = async () => {
      const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3}`);
      const popularMoviesData = await popularMoviesResponse.json();
      setPopularMovies(popularMoviesData);
   };


   const [cart, setCart] = useState([]);
   const [page, setPage] = useState(PAGE_PRODUCTS);
 
   const navigateTo = (nextPage) => {
     setPage(nextPage);
   };
 
   const getCartTotal = () => {
     return cart.reduce(
       (sum, { quantity }) => sum + quantity,
       0
     );
   };

   useEffect(() => {
      getPopularMovies();
   }, []);

   useEffect(() => {
      if(search.trim() === "") {
         setShowPagination(true);
      }
      getMovies();
   }, [search, currentPage]);

   useEffect(() => {
      const loadingTimeout = setTimeout(() => {
         setIsLoading(false);

      }, 1300);
      return() => clearTimeout(loadingTimeout);
   }, [movies, currentPage]);

   return (
      <React.Fragment>
          <MovieContext.Provider value={{ hiddenMenu, setHiddenMenu,
       activeLink, setActiveLink, popularMovies, search, setSearch,
       currentPage, setCurrentPage,movies, setMovies,
       getPopularMovies, getMovies, handleSearch, isLoading, setIsLoading,
       showPagination, setShowPagination,newPage}}>
          {children}
      </MovieContext.Provider>
         <div className="App">
      <header>
        <button hidden onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button hidden onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button>
      </header>
      {/* {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )} */}
      {/* {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )} */}
    </div>
      </React.Fragment>
     
   );
      };
