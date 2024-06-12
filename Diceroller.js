function ondice(){
    const numofdice= document.getElementById("number").value 
    const diceresult= document.getElementById("result")
    const diceimages= document.getElementById("images")
    let images= [];
    let values= [];
    for(i=0; i< numofdice; i++){
        const random= Math.floor(Math.random()*6) +1
        values.push(random)
        images.push(`<img src="../images/${random}.PNG"">`)
    }   
    diceresult.textContent=`Dice: ${values.join(", ")}`
    diceimages.innerHTML= images.join("  ")

}