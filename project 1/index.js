const Title = document.getElementById("Title");
const Description = document.getElementById("Description")
const Batch =document.getElementById("Bacth-name")
const Due = document.getElementById("Due-date")
const Submit = document.getElementById("Submit")
const Add = document.getElementById("Add")
const Past = document.getElementById("Past")
const Future =document.getElementById("Future")
const table = document.getElementById("table")

const visible = ()=>{
    table.style.visibility = "visible"
}
Add.addEventListener("click", visible)


const pastAssingn = [];
const FutureAssingn = [];
let past1;
let future1;

const result= ()=>{
    const obj = {
         mainTitle :Title.value,
         mainDescription : Description.value,
         mainBatch : Batch.value,
         mainDue :  Due.value,
    }
    let row = `
    <tr>
                <td>${obj.mainTitle}</td>
                <td>${obj.mainDescription}</td>
                <td>${obj.mainBatch}</td>
                <td>${obj.mainDue}</td>
            </tr>
            `
    table.innerHTML+= row;
    const compare = obj.mainDue;
    let date = new Date();
    let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];

    if(dateString > compare){
        pastAssingn.push(obj);
        past1 = pastAssingn;
    }else{
        FutureAssingn.push(obj)
        future1 = FutureAssingn;
    }
}

Submit.addEventListener("click", result)

const pastResult =  ()=>{
    visible();
    table.innerHTML = "";
    past1.forEach  ((element)=> {
        const tr = document.createElement("tr")
        const Title = document.createElement("td")
        const Description = document.createElement("td")
        const Batch = document.createElement("td")
        const date = document.createElement("td")
        Title.innerHTML = element.mainTitle;
        Description.innerHTML = element.mainDescription;
        Batch.innerHTML = element.mainBatch;
        date.innerHTML = element.mainDue;
        tr.append(Title,Description,Batch,date)
        table.append(tr)
    })
}

Past.addEventListener('click', pastResult)

const futureResult =  ()=>{
    visible();
    table.innerHTML = "";
    future1.forEach((element)=> {
        const tr = document.createElement("tr")
        const Title = document.createElement("td")
        const Description = document.createElement("td")
        const Batch = document.createElement("td")
        const date = document.createElement("td")
        Title.innerHTML = element.mainTitle;
        Description.innerHTML = element.mainDescription;
        Batch.innerHTML = element.mainBatch;
        date.innerHTML = element.mainDue;
        tr.append(Title,Description,Batch,date)
        table.append(tr)
    });
}

Future.addEventListener("click", futureResult)