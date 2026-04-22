const selecao = document.querySelector('#filtro')
const linhas = document.querySelectorAll('tr')
selecao.addEventListener('input', function atualizar() {
    let input = selecao.value
    for(let index = 1; index < linhas.length; index++) {

        if(input !== linhas[index].children[5].textContent) {
            linhas[index].style.display = 'none'
          
        }
        if(input == linhas[index].children[5].textContent || input == linhas[index].children[0].textContent || input == 0) {
            linhas[index].style.display = ''
        }
    }
   
})