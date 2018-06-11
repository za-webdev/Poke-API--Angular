import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokeService {

	 
  constructor(private _http: HttpClient) {
  		this.getPoki();

   }


  getPoki(){

   	let tempObservable=this._http.get('https://pokeapi.co/api/v2/pokemon/1/');


   	tempObservable.subscribe(data=>{
    	console.log(data);
    	
        let string="";
        let urls=[];

        for (let i=0;i<data["abilities"].length;i++){

          string+=data["abilities"][i]["ability"]["name"]+" ";

          urls.push(data["abilities"][i]["ability"]["url"])
        }

        console.log(`The abilities are : ${string}`);


        let urls2=[];
        for(let i=0;i<urls.length;i++){
          let pokemon=[];.
          this._http.get(urls[i]).subscribe(data=>{

            // console.log("Data",data);
            console.log(`${data["pokemon"].length} pokemon have the ${data["name"]} ability`); 

            for (let j=0;j<data["pokemon"].length;j++){
              console.log(`Pokemon name:${data["pokemon"][j]["pokemon"]["name"]}`);

              if((!urls2.includes(data["pokemon"][j]["pokemon"]["url"])) && (data["pokemon"][j]["pokemon"]["url"] !='https://pokeapi.co/api/v2/pokemon/1/')){
              urls2.push(data["pokemon"][j]["pokemon"]["url"])

              }
            }

             
          });
          
        }


	});

   

 

} 
} 


