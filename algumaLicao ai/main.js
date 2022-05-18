'use strict'

class card extends HTMLElement{
    constructor(){
        super();
        this.build()
    }

    build () {
        const shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createCard())
    }

    styles()
    {
        const style = document.createElement('style')
        style.textContent = `
        
        .card{
            width: 250px;
            height: ${this.cardImage()};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            background-color: ${this.bgcolor()};
        }
        
        .card-text{
            width: 50%;
            height: 20px;
            padding: 4px;
            text-align: center;
            color: rgb(76, 88, 83);
            background-color: burlywood;
            text-transform: uppercase;
            border-radius: 12px;
            box-shadow: 0 0 20px black;
        }
        
        .card-image{
            width: 50%;
            height: 50%;
            border-radius: 50%;
            background-image: url(../img/avatar-de-perfil.png);
            background-size: cover;
            box-shadow: inset 0 0 8px black;
        }
        
        div{
            width: 300px;
            height: 50px;
            background-color: cadetblue;
        }
        
        `
        return style
    }

    createCard()
    {

        //<div class="card">
          //  <div class="card-text">Rebeca Lopes</div>
           // <div class="card-image"></div>
            //<div class="card-text">DS2T</div>
        //</div> 
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `        
                <div class="card-text">${this.nome()}</div>
                <div class="card-image"></div>
                    <div class="card-text">Classe</div>
                </div> 
        `

        return card
    }

    bgcolor()
    {
        const color = this.getAttribute('data-bgcolor') ?? "#00F"
        return color 
    }

    nome()
    {
        const caixaNome = this.getAttribute('data-nome')  ?? "Rebeca"

        return caixaNome
    }

    cardImage(){
        const tamanhoCard = this.getAttribute('data-cardImage') ?? "250px"
        return tamanhoCard
    }
    
}

customElements.define('card-aluno', card)