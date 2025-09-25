// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjJhNTcwNGEzMzMzODM2ZGIyM2MzMjFhMTJhNjU4MCIsIm5iZiI6MTc1ODEyMjU4Ny4zMzYsInN1YiI6IjY4Y2FkMjViZmE3MmI2MjYyODFmMjMyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aa0cFr8ArwGQN7-P622Rlkr87-O5pGUDvVuOLy10RAU'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
export const TMDB_CONFIGUE = {
   
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    BASE_URL: "https://api.themoviedb.org/3",
    headers: {
        accept : 'application/json',
        Authorization : `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}


export const fetchMovies = async ({query} : {query: string}) => {
    const endPoint = query ? `${TMDB_CONFIGUE.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : 
    `${TMDB_CONFIGUE.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.asc`;

    const response = await fetch(endPoint, {
        method : 'GET',
        headers : TMDB_CONFIGUE.headers
    })

    // console.log("Response", response.status)

    //@ts-ignore
     if (!response.ok) {
      // Read response text once, log it
      const errorText = await response.text();
    //   console.log("Error Response:", errorText);
      throw new Error(response.statusText || "Something went wrong");
    }

    //@ts-ignore    
    const data = await  response.json();
    // console.log("Data", data);
    return data?.results;
}


export const movieDetails = async (id:string) => {
    const endPoint = `${TMDB_CONFIGUE.BASE_URL}/movie/${id}`;

    const response = await fetch(endPoint,{
        method : 'GET',
        headers : TMDB_CONFIGUE.headers
    })

    if(!response.ok){
        // const errorText = await response.text();
        throw new Error(response.statusText || "Something went wrong");
    }

    const data = await response.json()

    return data;
}