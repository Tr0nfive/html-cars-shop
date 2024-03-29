var rangeValue = document.getElementById("range-value");
var rangeSlider = document.getElementById("priceRange");

rangeSlider.addEventListener("input", showSliderValue,false);

function showSliderValue() {
    rangeValue.innerHTML = rangeSlider.value;
    var valuePosition = (rangeSlider.value/rangeSlider.max);
    
}