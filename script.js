const avanca = document.querySelectorAll (',btn-proximo');
avanca.forEach(button => {
    button.addEventListener('click, function'(){ 
        const atual = document.queryselector('ativo') ;
        const proximoPasso = 'paso-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementByid(proximoPasso).classList.ad('ativo');
        {}