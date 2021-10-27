
import { useState } from "react";

    
  function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}> 👍</button>
      <p>{like}</p>
      <button onClick={() => setdisLike(dislike + 1)}>👎︎</button>
      <p>{dislike}</p>
    </div>
  );
}


function App() {
  
  const movies=[
    {
   name:"Interstellar",
  poster:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  rating:"8.6",
  summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."

    },
    {
      name: "Baahubali: The Beginning",
      poster:
        "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg", 
      rating: "8/10",
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "96",
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
        rating: "8.6/10",
      summary:
        "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
    },
    {
      name: "Finding Nemo",
      poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg",
   rating: "8.1/10",
      summary:
        "After his son gets abducted from the Great Barrier Reef and is dispatched to Sydney, Marlin, a meek clownfish, enlists the help of a forgetful fish and embarks on a journey to bring him home."
    },
];
  return (
    <div classNmae="App">
    )
}
{movies.map((mv)=>(
<Movie 
name={mv.name}
 poster={mv.poster} 
 rating={mv.rating} 
 summary={mv.summary} />  ))}
function Movie({name,poster,rating,summary}){
  return (
    <div className="movie-container">
      <img className="movie-poster" 
      src={poster}
            alt={name} />
     <div className="movie-specs">
     <h3>{name}</h3>
     <p>{rating}</p>
      </div>
     <p>{summary}</p>   <Counter />  </div>
      </div>
      
  )
}
