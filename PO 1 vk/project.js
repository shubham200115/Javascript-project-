
    const movie= document.getElementById("F-movie");
    const Ninfo = document.getElementById("Name");
    const Vinfo = document.getElementById("Value");
    const ul = document.getElementById("ul")
    const Filter = document.getElementById("Filter")
    const addbutton = document.getElementById("btn")
    const findB = document.getElementById("btn1")

    let result = () => {
        const movie1 = movie.value;
        const Ninfo1 = Ninfo.value;
        const Vinfo1 = Vinfo.value;
        const list = document.createElement("li");
        const capital = movie1.toUpperCase();
        list.textContent = `${capital} - ${Ninfo1} : ${Vinfo1}`;
        ul.appendChild(list) 
        const Dl = document.createElement("button")
        Dl.setAttribute("id", "dButton") 
        Dl.textContent = `Delete`;
        list.appendChild(Dl);

        const clear = () => {
            list.remove();
        }
           
        Dl.addEventListener("click", clear)
    }
    addbutton.addEventListener("click" , result)


    const searchB = () => {
        const input = Filter.value.toUpperCase();
        const li = document.getElementsByTagName("li");
        for (let i of li){
            const valueS = i.textContent ;
            if(valueS.toUpperCase().indexOf(input)>-1){
                i.style.display ='block'
            }else{
                i.style.display = 'none';
            }
            
             
        }
    }
    findB.addEventListener("click", searchB)




//     let obj = {
//         a: "hello world",
//         b: 42,
//         c: true
//     };
    
    
    
//     console.log(obj["a"])
//     console.log(obj[a])


//     let arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
//      arrayList.splice(0,4)
//     console.log(arrayList)



// // let button = document.querySelector("btn")

// // let result1 = () => {
// //     let input = (document.getElementById('F-movie').value)
// //     let input1 = (document.getElementById("Name").value)
// //     let input2 = (document.getElementById("Value").value)
// //     var final = input + input1 +input2;
//     document.getElementById("Empty").innerHTML = final;
//     // let para = document.querySelector("Empty")
//     // para.insertAdjacentHTML("beforeend", `<p> ${final}</p>`)
    
// }
//  button.addEventListener('click', result)