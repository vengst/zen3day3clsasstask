//// 1.how to compare json have the same without order;

let obj1={
    name:"person 1",
    age:5

}
 let obj2={
    age:5,
    name:"person1"
 }
 console.log( obj1===obj2 ); ///ans =false
 console.log( obj1.stringfy===obj2.stringfy );///ans =true



 //2.use the rest countries, API url -> link and display all the flags in the console

 let abc=new XMLHttpRequest();

  console.log(abc);
 abc.open("GET","https://restcountries.com/v3.1/all" );
 abc.send();
 abc.onload=function(){
     const data=JSON.parse(abc.response)
     console.log(data)
/     console.log(abc.status);
      for(let i=0; i<data.length;i++){
      console.log("flags :",data[i].flags.png)
     }
 }
 
 
 ///3.se the rest countries, API url to find countries name,region,subregion,population
 let xyz=new XMLHttpRequest();

 console.log(xyz);
 xyz.open("GET","https://restcountries.com/v3.1/all" );
xyz.send();
xyz.onload=function(){
     const data=JSON.parse(xyz.response)
     console.log(data)
     console.log(xyz.status);
     for(let i=0; i<data.length;i++){
        console.log("country name :",data[i].name.common);
        console.log("population:",data[i].population);
        console.log("region:",data[i].region);
        console.log("subregion:",data[i].subregion);
     }
}