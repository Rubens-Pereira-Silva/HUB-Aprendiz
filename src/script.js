
let menu = document.querySelector(".floating_menu");

function openMenu(){
    menu.classList.toggle("active")
}

//Abri lista de aprendizes da classe
function createClassList(){
    let list = document.getElementById("ClassList");
    console.log ("oi");
    for(let i = 0; i < ClassListArray.length; i++){
        list.innerHTML += `
        <button class="BTN-Aprendiz">
                    <img src="/src/ClassIcons/${ClassListArray[i][0]}.jpg" alt="${ClassListArray[i][0]}">
                    <p class="Name">${ClassListArray[i][0]}</p>
                    <p class="Empresa">${ClassListArray[i][1]}</p>
        </button>
        `
    }
    
}
