function fun(){
    let text = " ";
    
    for(let i = 0; i < 5; i++){
        text += "JavaScript is Fun!" + "<br>";

    }

    document.getElementById('fun').innerHTML = text;
}