
  function executar(){
    var texto = document.getElementById('texto').value;
    var lista = document.getElementById('historico');
    var adicionar= true;

    var opt = document.createElement('option');

    for(i=0; i <lista.options.length;i++){
        if(texto==lista.options[1].value){
            adicionar=false;
        }

    }
    if(adicionar==true){
        opt.value=texto;
        lista.appendChild(opt);
    }
    
}




/*function pesquisar(){
    var input,filtro,menu,menuItens,Links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
        links = menuItens[i].getElementsByTagName("a")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="";
        }else{
        menuItens[i].style.display="none";
    }
    }

}*/