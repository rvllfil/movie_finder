class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=8d83b5dc37b96a69d7b6372dfe256ba1&language=en-US&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                console.log(responseJson.results)
                return Promise.resolve(responseJson.results); 
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    
    
    }
}
export default DataSource;