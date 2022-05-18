'use strict'

fetch('https://testeleonid.herokuapp.com/alunos'
).then((response)=>{
    return response.json();
}).then((objetoJson)=>{


    const divAluno = document.querySelector('.cardAluno');

    objetoJson.forEach(element=>{
        const nomeAluno = element.nome;
        const turmaAluno = element.turma;
        const statusAluno = element.status;
        const fotoAluno = element.foto;
        const nome = document.createElement('div')
        const turma = document.createElement('div')
        const status = document.createElement('')
    })
})