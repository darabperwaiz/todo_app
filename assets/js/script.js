
// Function Calling
checkDeadline()
changeColor()


// no date selected then show "NO DEADLINE"
function checkDeadline(){
    // select the all span where date show
    const deadLine = document.querySelectorAll('.todo-check > p > span')
    // console.log(deadLine)

    // Looping all span and check it is empty or not 
    for(let i of deadLine){
        // if empty then set innerHTML to 'NO DEADLINE'
        if(i.innerHTML === ''){
            i.innerHTML = 'NO DEADLINE'
        }
    }
    
}


// change background color according to category
function changeColor(){
    // SELECTING ALL P TAG IN A VARIABLE
    const todo_p = document.querySelectorAll(".todo-cat > p")

    // ITERATING OVER ALL P TAG AND CHECK CONDITION THEN SET COLOR ACCORDING TO IT
    for(let i of todo_p) {
        if(i.innerHTML == 'Work') {
        i.style.backgroundColor = "purple"
        i.style.borderRadius = "3px"
        }
        else if(i.innerHTML == 'Personal') {
            i.style.backgroundColor = "#007FFF"
            i.style.borderRadius = "3px"
        } else if(i.innerHTML == 'Cleaning') {
             i.style.backgroundColor = "#AA0000"
             i.style.borderRadius = "3px"
        }
        else if(i.innerHTML == 'School') {
             i.style.backgroundColor = "#FFD700"
             i.style.borderRadius = "3px"
        }else if(i.innerHTML == 'Other') {
            i.style.backgroundColor = "gray"
            i.style.borderRadius = "3px"
        }
    }
   
}

