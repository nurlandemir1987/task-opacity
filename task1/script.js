

let radiusRange = document.querySelector(".radius_range");
let opacityRange = document.querySelector(".opacity_range")
let img = document.getElementsByTagName("img");

radiusRange.addEventListener("input", radiusChange)
opacityRange.addEventListener("input", opacityChange)

function opacityChange() {
    let valOpacity = opacityRange.value;
    for (let index = 0; index < img.length; index++) {
        img[index].style.opacity = `${valOpacity}`
    }

    let storage_local = JSON.stringify(valOpacity)
    localStorage.setItem("data", storage_local)
}

function radiusChange() {
    let valRadius = radiusRange.value;
    for (let index = 0; index < img.length; index++) {
        img[index].style.borderRadius =`${valRadius}px`
    }

    let storage_local = JSON.stringify(valRadius)
    localStorage.setItem("data2", storage_local)
}

window.addEventListener("load", StorageValues);
function StorageValues() {
    let opacity_save = localStorage.getItem("data");
    let radius_save = localStorage.getItem("data2");

    if (opacity_save !==null) {
        opacityRange.value = JSON.parse(opacity_save);
        opacityChange(); 
    }

    if (radius_save !==null) {
        radiusRange.value = JSON.parse(radius_save);
        radiusChange(); 
    }

}