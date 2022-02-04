let pButton = document.querySelector(".result")
pButton.addEventListener("click", (e) =>{
    console.log(e)
    let a = document.querySelector(".a").value 
    let b = document.querySelector(".b").value
    let c = document.querySelector(".c").value 
    if(a!=0){
        let d = b**2 -4 * a * c
        alert(d) 
    }
})
