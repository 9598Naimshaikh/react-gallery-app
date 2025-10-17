import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);

  const [page, setPage] = React.useState(2);

  const handleChange = (event, value) => {
    setPage(value);
    setUserData([]);
  };

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
    // console.log(response.data);
    setUserData(response.data);
  }

  useEffect(() => {
    getData();
  }, [page])

  let printUserData = <h1 className="text-zinc-300 font-medium tracking-wide absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">Loading...</h1>

  if (userData.length > 0) {
    printUserData = userData.map((item, index) => {
      return <div className="card h-52 md:h-48 lg:h-44 hover:scale-105 lg:hover:scale-110 duration-200 rounded-2xl overflow-hidden bg-zinc-800">
        <a href={item.url} className="img w-full h-full">
          <img className="w-full h-full object-cover" src={item.download_url} alt="" />
        </a>
        <h2 className="text-xl font-medium tracking-wide my-1 text-center">Alexa Mendis</h2>
      </div>
    })
  }

  return <>
    <div className="relative bg-zinc-900 text-white w-full min-h-screen">
      <Navbar />
      <HeroSection />

      <div className="px-4 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto w-full min-h-[60vh] items-center justify-center">

        {printUserData}

      </div>

      <div className="pagination fixed bottom-2 w-full min-h-22 py-2 flex items-center justify-center">
        <Stack spacing={2} className="bg-zinc-100 rounded-2xl py-2 px-4">
          {/* <Typography>Page: {page}</Typography> */}
          <Pagination count={10} page={page} size="large" color="primary" onChange={handleChange} />
        </Stack>
      </div>
    </div>
  </>
}