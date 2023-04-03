"use client"
import Cards from '@/Components/Cards';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Home({ search }) {
  console.log(search, 'search')
  const { get } = useSearchParams();
  const category = get('gener') === null ? 'top_rated' : get('gener');
  // console.log(category)
  const [Data, setData] = useState([]);
  const FetchData = async () => {
    try {
      const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=1cb845cc55dd460ae0d5f6c75731b7c3&language=en-US&page=1`);
      if (results) {
        setData(results)
        console.log(results)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchData()
  }, [category])

  return (

    <>
      <Cards {...{ Data }} />
    </>
  )
}
