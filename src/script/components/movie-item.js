class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
            :host {
                margin: 20px 10px;
            }
            .card{
                position: relative;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                width:300px;
                height:450px;
                background-color: #000;
                overflow:hidden;
                box-shadow:0 5px 10px rgba(0,0,0,.5);
            }

            .card .poster{
                position:relative;
                overflow:hidden;
            }
            
            .card .poster img{
                width:100%;
            }
            
            .details h2{
                font: 2.1rem 'Cookie', cursive;
            }
            
            span,p,.romance{
                font: 1.2rem 'Saira Extra Condensed', sans-serif;
            }
            
            .details{
                position:absolute;
                width:90%;
                height:80%;
                padding:10px 10px;
                left:0;
                bottom:-180px;
                transition:1s;
                color:#fff;
                z-index:2;
            }
            
            .card:hover .details{
                bottom:40px;
            }
            
            .card .poster:before{
                content:'';
                position:absolute;
                bottom:-180px;
                left:0;
                width:100%;
                height:100%;
                background: linear-gradient(0deg, #000 50%, transparent);
                z-index:1;
            }
            
            .card:hover .poster:before{
                bottom:0;
            } 
            .info p{
                font-size:17px;
                text-align:justify;
            }
            
            .info{
                position:relative;
            }
        </style>
        <div class="card">
            <div class="poster">
                <img src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}">
            </div>
            <div class="details">
                <h2>${this._movie.title}<br>(${this._movie.release_date})<br></h2>
                <div class="info">
                    <p>${this._movie.overview}</p>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("movie-item", MovieItem);