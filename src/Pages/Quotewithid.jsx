import React from 'react'

const Quotewithid = () => {
  
      const HandleSubmit = (event) => {
    event.preventDefault();
  }


 
  return (
    <div className="min-h-[100vh] w-full bg-zinc-200 text-slate-900 dark:bg-zinc-900 dark:text-slate-100 p-4">
      <h1 className="text-5xl text-center font-bold pt-5">Sign UP</h1>
      <p className="border border-black w-2/4 mt-3 ml-80"></p>
      <p className="text-2xl pl-80 pt-2 ">About Yourself</p>
      <p className="pl-80">Tell us About yourself</p>
      
      <form onSubmit={HandleSubmit} className="pl-80 pt-4">
        <label className="font-bold text-2xl" htmlFor=" Name">
          {" "}
          Name
        </label>
        <br />
        <input
          className=" w-64 pl-2 mt-3  border-b-2 border-black  bg-transparent box-border-none"
          type="text"
          placeholder="First Name"
        />
        <input
          className=" w-72 ml-16 pl-2 mt-3  border-b-2 border-black  bg-transparent "
          type="text"
          placeholder="LastName"
        />

        <br />
        <br />

        <label className="font-bold text-2xl " htmlFor="email">
          Email
        </label>
        <br />
        <input
          className=" w-2/3  pl-2 mt-5  border-b-2 border-black  bg-transparent "
          type="email"
          placeholder="Email"
          required
        />
        <br />
        <br />

        <label className="font-bold text-2xl " htmlFor="password">
          Password
        </label>
        <br />

        <input
          className=" w-2/3  pl-2 mt-5  border-b-2 border-black  bg-transparent "
          type="password"
          placeholder="......."
          required
        />
        <br />
        <br />

        <button className="text-center font-bold bg-blue-600 text=2xl border-2 border-blue-600 rounded-md h-10 w-36 hover:bg-slate-700 ml-64">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Quotewithid