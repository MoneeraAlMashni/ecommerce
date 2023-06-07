import React from 'react'


const Search  =  () => {

  return (

    <span class = "flex  max-w-2xl  float-right items-right mr-19 sm: float-center sm: algin-center sm: w-xl">
      <label for = "simple-search" class = "sr-only">Search</label>
     
      <div class = "relative w-full float-left  mr-40">
        <div class = "absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none"></div>
        <input type = "text" id = "simple-search" class = "relative pl-2 h-8 mt-5 bg-white-50 border border-violet-900 text-gray-900 " placeholder = "Search" required />
       
        <button type = "submit" class = "absolute ml-0 mt-5 text-sm font-medium items-center w-10 h-8 text-white bg-violet-700 rounded-e border border-violet-700 hover: bg-violet-800 focus: ring-4 focus: outline-none focus: ring-blue-300 ">
          <svg class = "w-7 h-8 pl-3 pb-2" fill = "none" stroke = "white" viewBox = "0 0 20 14" xmlns = "http://www.w3.org/2000/svg"><path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        
        <span class = "sr-only">Search</span>
      </div>
    </span>
  )
}

export default Search