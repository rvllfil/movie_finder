class SearchBox extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .form-wrapper {
            max-width: 800px;
            padding: 15px;
            background: rgba(0,0,0,.2);
            border-radius: 10px;
            box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
        }
        
        .form-wrapper input {
            box-sizing: border-box;
            padding: 5px;
            width: 75%;
            height: 40px;
            font: bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma';
            border: 0;
            background: #eee;
            border-radius: 3px 0 0 3px;      
        }
        
        .form-wrapper input:focus {
            outline: 0;
            background: #fff;
            box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
        }
        
        .form-wrapper input::placeholder {
            color: #999;
            font-weight: normal;
            font-style: italic;
        }
        
        .form-wrapper button {
            border: 0;
            padding: 0;
            float: right;
            cursor: pointer;
            height: 41px;
            width: 24%;
            font: bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';
            color: #fff;
            text-transform: uppercase;
            background: #d83c3c;
            border-radius: 0 3px 3px 0;      
            text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);
        }   
            
        .form-wrapper button:hover{     
            background: #fa6d6d;
        }   
            
        .form-wrapper button:active,
        .form-wrapper button:focus{   
            background: #be1414;    
        }
            
        @media screen and (max-width: 550px){
            .form-wrapper {
                flex-direction: column;
                position: static;
            }
        
            .form-wrapper input {
                width: 100%;
                margin-bottom: 8px;
                border-radius: 3px 3px;  
            }
        
            .form-wrapper button {
                width: 100%;
                border-radius: 3px 3px;
                float: none;
            }
        }        
        </style>

        <div class="form-wrapper">
            <input id="searchElement" type="text" placeholder="Search here...">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-box", SearchBox);