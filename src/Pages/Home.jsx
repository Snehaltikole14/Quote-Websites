import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getQuoteById } from '../features/QuoteSlice';

const Home = () => {

  const dispatch =useDispatch();
  const quoteState =useSelector((state) => state.quotes);
  useEffect(() =>{
    dispatch((getQuoteById(4)))
  } ,[])

  return (
    <div className="min-h-[100vh] w-full bg-zinc-200 text-slate-900 dark:bg-zinc-900 ">
      <div className="h-60 w-full">
        <img
          src="https://png.pngtree.com/background/20210714/original/pngtree-quote-bubble-text-pink-neon-light-background-vector-illustration-eps-jpg-picture-image_1248699.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="flex flex-col w-1/2 gap-8 pt-8">
        <div className="dark:bg-slate=800 bg-slate-400 p- rounded-md shadow-md shadow-slate-600">
          <p className="w-full text-2xl">
            If You Can't Make It Good ,At Least Make it Look Good.
          </p>
          <p className="text-end dark:text-slate-400 text-slate-700 pt-2">
            -Bill Gates
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home