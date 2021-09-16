
const tableTd = document.querySelector(".content");

const coronaUpdate = async()=>{
    let no = 1;
    try{
        const data = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        const res = await data.json();
        let result = res.data.regional;
        let ans = result.map((val)=>{
            return`
            <tr>
            <td>${no++}</td>
            <td>${res.lastRefreshed}</td>
            <td>${val.loc}</td>
            <td>${val.confirmedCasesIndian}</td>
            <td>${val.discharged}</td>
            <td>${val.deaths}</td>
            </tr>
            `;
        });
        ans = ans.join("");
        tableTd.innerHTML = ans;
    }catch(error){
        console.log(error);
    }
}
coronaUpdate();



function stateFilter(){
const int = document.querySelector("input").value.toUpperCase();
    let table = document.querySelector("table");
    let tr = table.getElementsByTagName("tr");
    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[2];
        if(td){
           let tdVal = td.textContent || td.innerText;
            if(tdVal.toUpperCase().indexOf(int) > -1){
                tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
        }
    
    }
}