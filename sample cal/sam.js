const input = document.getElementById('cov')


function append(a){
    input.value += a
}


function cleared(){
    input.value = ""
}

function calculate(){
    try{
        input.value = eval(input.value)
    } catch {
        input.value = 'ERROR'
    }
}