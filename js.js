let pButton = document.querySelector(".result")
pButton.addEventListener("click", (e) =>{
    console.log(e)
    let a = document.querySelector(".a").value 
    let b = document.querySelector(".b").value
    let c = document.querySelector(".c").value 
    if(a!=0 && b!=0 && c!=0){
        let d = b**2 -4 * a * c 
        if (d > 0){
        let x1 = (-b - Math.sqrt(d))/(2 * a)
        let x2 = (-b + Math.sqrt(d))/(2 * a)
        alert("D = " + d, "x1 = " + x1, "x2 = " + x2)}else {alert("Нет решений")}
    }else 
})
