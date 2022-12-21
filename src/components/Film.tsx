import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiKey from '../apiKey';
import { fi } from 'date-fns/locale';


const Film = () => {
  const { film_id } = useParams();
  const [filmData, setFilmData] = useState<any>();

  useEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/${film_id}?api_key=${apiKey}&language=en-GB}`)
      .then((response) => response.json())
        .then(async (data) => {
          setFilmData(data)
        })
  }, [film_id]);

  console.log(filmData)

  return (
    <div>
      {filmData ? 
      <div>
        <h1>{filmData.title} </h1>
        <p>{filmData.overview}</p>
        <p>Released: {filmData.release_date}</p>
        <p>Runtime: {filmData.runtime} mins</p>
        <p>{filmData.vote_average} / 10</p>
      </div> 
      : ""}

      
    </div>
  )
};

export default Film;

