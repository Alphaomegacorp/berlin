// alert( "etudiant chez GETSMARTER")
setInterval(changeBG ,1000);

function changeBG(){
    const  col1 =getrandomRGB();
    const  col2 =getrandomRGB();
    const  col3 =getrandomRGB();

    const colorstring =` rgb( ${col1}, ${col2}, ${col3} )`
    document.body.style.background=colorstring;
    document.getElementById('color').innerHTML=colorstring;
}

function getrandomRGB(){
    return Math.floor(Math.random()*256);
}
