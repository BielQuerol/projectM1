'use strict'
function getPosterFilm (event)   {
    
  const urlparams = new URLSearchParams(window.location.search)
  let mood = urlparams.get("mood")
  console.log(mood);

    if (mood === 'sad'){
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=aa7f3dd5ae6f931103f10211aace5f6d&with_genres=35")
        .then(response =>{
           return response.json();

        })
        .then(data =>{   
            let randomIndex =Math.floor(Math.random()*20)
            let randomMovie = data.results[randomIndex]
            let poster = `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`
            let movieTitle = [randomMovie.original_title]
            let movieOverview = [randomMovie.overview]
            let article = document.createElement('article')
            let imageElement = document.createElement("img")
            imageElement.setAttribute("src",poster)
            article.innerHTML = `<h2>${movieTitle}</h2>
            <h3>${movieOverview}</h3>`;
            article.appendChild(imageElement)
            document.querySelector("#result").appendChild(article)
        

            console.log(article)
        })
        .catch(error => console.log(error));
    }
   if (mood === 'angry'){
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=aa7f3dd5ae6f931103f10211aace5f6d&with_genres=53")
            .then(response =>{
                return response.json();
     
             })
             .then(data =>{   
                 let randomIndex =Math.floor(Math.random()*20)
                 let randomMovie = data.results[randomIndex]
                 let poster = `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`
                 let movieTitle = [randomMovie.original_title]
                 let movieOverview = [randomMovie.overview]
                 let article = document.createElement('article')
                 let imageElement = document.createElement("img")
                 imageElement.setAttribute("src",poster)
                 article.innerHTML = `<h2>${movieTitle}</h2>
                 <h3>${movieOverview}</h3>`;
                 article.appendChild(imageElement)
                 document.querySelector("#result").appendChild(article)
             
 
                 console.log(article)
             })
             .catch(error => console.log(error));

    } 
    if (mood === 'happy'){
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=aa7f3dd5ae6f931103f10211aace5f6d&with_genres=18")
        .then(response =>{
            return response.json();
 
         })
         .then(data =>{
            let randomIndex =Math.floor(Math.random()*20)
            let randomMovie = data.results[randomIndex]
            let poster = `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`
            let movieTitle = [randomMovie.original_title]
            let movieOverview = [randomMovie.overview]
            let article = document.createElement('article')
            let imageElement = document.createElement("img")
            imageElement.setAttribute("src",poster)
            article.innerHTML = `<h2>${movieTitle}</h2>
            <h3>${movieOverview}</h3>`;
            article.appendChild(imageElement)
            document.querySelector("#result").appendChild(article)
            

            console.log(article)

            
         })
         .catch(error => console.log(error));

} 
    
}




window.addEventListener("load",getPosterFilm)