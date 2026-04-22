let td = document.querySelectorAll('td')
let tr = document.querySelectorAll('tbody tr')
let url = 'http://127.0.0.1:5500/index.json';
let tabela = await fetch(url)
let alunos = await tabela.json()

let aluno = {
    peso: '',
    altura: '',
    imc: '',
    classificacao: '',
    tabCor: ''
}
let i = 0
let b = 2


while (i < (tr.length - 1)) {
    aluno.altura = alunos[i].altura

    aluno.peso = parseInt(alunos[i].peso)

    aluno.peso = aluno.peso * 100 //Evitar problemas
    aluno.altura = aluno.altura * 100
        //A virgula vai 2 casas pra esquerda

    aluno.imc = aluno.peso / (aluno.altura * aluno.altura) 
    
    aluno.imc = aluno.imc * 1000 //Denovo, pq o imc tem q igualar com o da lista xd 
    //A virgula vai 3 casas pra direita (pro case funcionar sem numero quebrado) 
    switch (true) {
        case aluno.imc < 185: aluno.classificacao = 'Abaixo do peso', aluno.tabCor = '#eec6c6'
        
            break;
        case aluno.imc < 249: aluno.classificacao = 'Peso normal', aluno.tabCor = '#ffffff'
            
            break;
            case aluno.imc < 299: aluno.classificacao = 'Sobrepeso', aluno.tabCor = '#edf4d8'
        
            break;
            case aluno.imc < 349: aluno.classificacao = 'Obesidade Grau 1', aluno.tabCor = '#cb9c9c'
            
            break;
        case aluno.imc < 400: aluno.classificacao = 'Obesidade Grau 2', aluno.tabCor = '#6f3939'
        
        break;
        case aluno.imc >= 400: aluno.classificacao = 'Obesidade Grau 3 (mórbida)', aluno.tabCor = '#350a0a'
            
            break;
        }
        aluno.imc = aluno.imc / 10 //a virgula vai 1 pra esquerda (valor correto)

        aluno.imc = Math.round(aluno.imc)

    tr[i].children[0].innerText = alunos[i].nome

    tr[i].children[1].innerText = alunos[i].idade

    tr[i].children[2].innerText = alunos[i].altura

    tr[i].children[3].innerText = alunos[i].peso

    tr[i].children[4].innerText = aluno.imc
        
    tr[i].children[5].innerText = aluno.classificacao
    

    tr[i].style.backgroundColor = aluno.tabCor 

        i += 1
}