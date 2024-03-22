// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//     alert(3+5) ;
//     // document.write("Hey");
//   }
//   let x = 6;
//   var y = 5;
//   console.log(x+y) ;

//People object 
  const people =[
    {
      name: 'Amit',
      age: 22 ,
      position: 'Developer' ,
    } ,
    {
      name: 'Hassan',
      age: 25 ,
      position: 'UI/UX Designer ' ,
    } ,
    {
      name: 'Joy',
      age: 32 ,
      position: 'Team Lead' ,
    } ,
    {
      name: 'AH Joy',
      age: 20 ,
      position: 'Intern!' ,
    } ,
  ];
  //Taking the age og that person object
  // const getAge = (person) => person.age;
  // // const ages = people.map( (person) => {
  // //   // console.log(person);
  // //   return person.age ;
  // // } ) ;
  // const ages = people.map(getAge); 
  // console.log(ages) ;

// Creating a new person & showing it in the console 
  // const newPerson = people.map( (item) => {
  //   return {
  //     firstName : item.name ,
  //     perPosition : item.position ,
  //     oldAge : item.age ,
  //   };
  // }) ;
  // console.log(newPerson) ;

  // Now creating a person object and show it in the HTML file 
  const names = people.map((person) => `<h3> ${person.name}</h3>`);
  const result = document.querySelector('#result');
  result.innerHTML = names.join('');