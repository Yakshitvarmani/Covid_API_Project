let cron = document.getElementById('search');
let vir = document.getElementById('template');
cron.addEventListener('keyup',e =>{
 if(e.key==='Enter'){
 let searchText = e.target.value;
 searchGitUser(searchText);
 }
})


async function searchGitUser(searchValue){
 let URL = "https://api.covid19api.com/country"
 let DATA = await window.fetch(`${URL}/${searchValue}`);
 let JSON = await DATA.json();
 let {Date,Confirmed,Country,Deaths,Active,Recovered} = JSON[JSON.length-1];
template.innerHTML =`

<p class="use">Country : ${Country} </p>

<main>
 <div>
 <p class="userName">Date: ${Date}</p>
 <p class="userName">Positive: ${Confirmed}</p>
 <p class="userName">Deaths: ${Deaths}</p>
 <p class="userName">Active: ${Active}</p>
 <p class="userName">Active: ${Recovered}</p>
 </div>
</main>
`
}