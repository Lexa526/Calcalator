let pButton = document.querySelector(".result")
pButton.addEventListener("click", (e) =>{
    console.log(e)
    let a = document.querySelector(".a").value 
    let b = document.querySelector(".b").value
    let c = document.querySelector(".c").value 
    if(a!=0){ 
    if(c == 0 && b != 0){
    let x1 = 0
    let x2 = -(b/a)
    alert("x1 = " + x1.toFixed(3) + ", x2 = " + x2.toFixed(3))}
    if(b == 0 && c != 0){
    if(c<0){
      let x1 = Math.sqrt(-(c/a))
      let x2 = -x1
      alert("x1 = " + x1.toFixed(3) + ", x2 = " + x2.toFixed(3))}
      else {alert("Нет решений(C > 0)")}}  
    if(b==0 && c == 0){
        if (a < 0){
            let x1 = Math.sqrt(-a)
            let x2 = -x1
            alert("x1 = " + x1.toFixed(3) + ", x2 = " + x2.toFixed(3)) 
        }else {alert ("Нет решений(a > 0)")}}
    if(b!=0 && c!=0){                
        let d = b**2 -4 * a * c 
        if(d > 0){
        let x1 = (-b - Math.sqrt(d))/(2 * a)
        let x2 = (-b + Math.sqrt(d))/(2 * a)
        alert("D = " + d + ", x1 = " + x1.toFixed(3) + ", x2 = " + x2.toFixed(3))}else if (d == 0){
        let x1 = -b /(2 * a)
            alert("D = " + d + ", x1 = " + x1.toFixed(3))
        }else{alert("Нет решений (D < 0)")}}}else {alert("Нет решений")} 
})