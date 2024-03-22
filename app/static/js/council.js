const clc = document.querySelectorAll(".cancel");
const arr = document.querySelectorAll(".arr_container");
const left_container = document.querySelectorAll(".left_container");



for(let i=0;i<arr.length;i++)
{
    arr[i].addEventListener("click", () => {
        arr[i].classList.add("active_arr");
        if (left_container[i].classList.contains("off")) {
            left_container[i].classList.remove("off");
            left_container[i].classList.add("active");
        }
    });
    clc[i].addEventListener("click", () => {
        arr[i].classList.remove("active_arr");
        if (left_container[i].classList.contains("active")) {
            left_container[i].classList.remove("active");
            left_container[i].classList.add("off");
        }
    });
    
}