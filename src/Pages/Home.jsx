import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../features/QuoteSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const quoteState = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(getQuotes()); // Dispatch on component mount
  }, [dispatch]);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  if (quoteState.status === "failed") {
    return (
      <div className="min-h-[100vh] flex justify-center items-center">
        <h1 className="text-red-500">Error: {quoteState.error}</h1>

        <Notfound />
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] w-full bg-zinc-200 text-slate-900 dark:bg-zinc-900 dark:text-slate-100 p-4">
      <div className="h-60 w-full relative">
        <img
          src="https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?cs=srgb&dl=pexels-rickyrecap-3041347.jpg&fm=jpg"
          alt="Motivational image"
          className="w-full h-full object-cover rounded-lg"
        />
        <Link to="/quoteid">
          <button className="border border-slate-900 px-4 py-2 rounded-lg absolute top-44 left-2 bg-slate-400 hover:bg-slate-300 dark:bg-slate-800">
            Sign Up
          </button>
        </Link>
        <button
          onClick={() => toggleTheme}
          className="border border-slate-900 px-4 py-2 rounded-lg absolute top-2 left-2 bg-slate-400 hover:bg-slate-300 dark:bg-slate-800"
        >
          Change theme
        </button>
      </div>

      
      {quoteState.status === "loading" ? (
        <div className="min-h-[100vh]  font-bold text-3xl">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="flex flex-col w-1/2 gap-8 pt-8">
          {quoteState.quotes.slice(0, 10).map((quote, index) => (
            <QuoteCard key={index} quote={quote.quote} author={quote.author} />
          ))}
        </div>
      )}
    </div>
  );
};

function QuoteCard({ quote, author }) {
  return (
    <div className="dark:bg-slate-800 bg-slate-400 p-4 rounded-md shadow-md shadow-slate-600">
      <p className="w-full text-2xl">{quote}</p>
      <p className="text-end dark:text-slate-400 text-slate-700 pt-2">
        - {author}
      </p>
    </div>
  );
}



export default Home;
