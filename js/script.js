const colorGenerator = (color) => {
    color_value = 0;
    if (color){
        color_value= display(color);
    }
    else{
        const randomColor = Math.floor(Math.random()*16777215).toString(16); 
        color_value = display(randomColor);
    }
    return color_value
}

// Runs when page is refresh
colorGenerator();

// Display Color Function
const display = (color) =>{
    name_value = ntc.name(color);

    
    document.body.style.backgroundColor = name_value[0];
    colorInput.value = name_value[0];
    colorName.innerHTML = name_value[1];
    hexValue.innerHTML = name_value[0]; 
}

// Button 
genBtn.addEventListener("click", function(){
    colorGenerator()
});



genSearch.addEventListener("click", function(){
    colorGenerator(colorInput.value);
});