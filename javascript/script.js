window.load =  slide(1);
 
var bgNumber = 1;

function slide(n){
    var allBgs = 4;
    document.getElementById('imgbg').style.backgroundImage =`url(imagens/${n}.jpg)`
    botoes(n, allBgs)
}
function anterior(){
    if(bgNumber > 1){
        bgNumber--
        slide(bgNumber)
    }
}
function proximo(){
    if(bgNumber < 4){
        bgNumber++;
        slide(bgNumber)
    }
}
function botoes(n, m){
    document.getElementById('botoes').innerHTML = '';
    for(a=1;a<=m;a++){
        if(a==n){
            document.querySelector('#botoes').innerHTML +="<li class='selected' onclick='slide("+a+")'></li>"
        }else{
            document.querySelector('#botoes').innerHTML +="<li onclick='slide("+a+")'></li>"

        }
    }
}  