//Moja
// console.log(('b'+'a'+ +'a'+'a').toLowerCase() )  ;
//Unique Values
const menu = [
  {
    name: 'pancakes',
    category : 'breakfast' ,
  } ,
  {
    name: 'burger',
    category : 'lunch' ,
  } ,
  {
    name: 'steak',
    category : 'dinner' ,
  } ,
  {
    name: 'becon',
    category : 'breakfast' ,
  } ,
  {
    name: 'eggs',
    category : 'breakfast' ,
  } ,
  {
    name: 'pasta',
    category : 'dinner' ,
  } ,
] ;

// const categories = menu.map( (cat) => {
//   console.log(cat.category ) ;
// }) ;
// const categories = menu.map( (cat) => `<h3> ${cat.category} </h3>` ) ;
// const res = document.querySelector('#result');
// res.innerHTML = categories.join('');

// const uniqecatagrs = new Set ( menu.map((item) => item.category) ) ;
//If we want to add some catagories 
const uniqecatagrs = ['all', ...new Set ( menu.map((item) => item.category) ) ] ;
console.log(uniqecatagrs) ;

const res = document.querySelector('.result');
res.innerHTML = uniqecatagrs
.map( (cat)=> {
  return `<button> ${cat} </button> ` ;
})
.join('') ;
//=============================
//Dynamic Object 
let appState = 'Loading' ;
const app ={
  [appState]:true
}
console.log(app) ;

const state = {
  loading: true  ,
  name: '' ,
  job: '' ,
}

// const dyobj = state.map( (s) => `<h3> ${s}  </h3>` ) ;
// const resdyobj = document.querySelector('#dyObj');
// resdyobj.innerHTML = `${state}`;

function updateState(key,value){
  state[key] = value ;
}
updateState('name' , 'Amit Hassan');
updateState('job' , 'Developer');
updateState('loading' , false);
updateState('product' ,[]);
console.log(state) ;

// const dp = document.querySelector('.dyObj');
// dp.innerHTML = state.name;
//===================================
//Filter & Find
const setmenu = menu.filter( (menu) =>{
  if(menu.category == 'breakfast')
   return menu;
})
console.log(setmenu);
const itemfind = menu.find((itm) => itm.name === 'burger') ;
console.log(itemfind) ;
//================================
//Reduce Function in JS 
const staff = [
  {name: 'bob' , age: 20 , position: 'developer' ,salary: 100},
  {name: 'pete' , age: 25 , position: 'designer' ,salary: 300},
  {name: 'susy' , age: 30 , position: 'The Boss' ,salary: 400},
  {name: 'anna' , age: 36 , position: 'intern' ,salary: 50},
];
//Creating a function for sumup the salaries 
const dailyTotal = staff.reduce((total,person)=> {
  console.log(total) ;
  console.log(person.salary) ;
  total += person.salary ;
  return total 
},0)
console.log(dailyTotal);