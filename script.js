
var  pol_vida,pol_ata;
var  pika_vida, pika_ata;
var  turno;
function inicio(){ 
pol_vida=document.getElementById('polva_vida'); 
pol_ata=document.getElementById('polva_ata'); 
pika_vida=document.getElementById('pika_vida'); 
pika_ata=document.getElementById('pika_ata');
turno=document.querySelectorAll('main #section_principal input');
pol_vida.innerText=polvasor.vida;
pol_ata.innerText=polvasor.ataque;
pika_vida.innerText=pikachu.vida;
pika_ata.innerText=pikachu.ataque;

for(var i=0;turno.length;i++){
  turno[i].addEventListener('click',function(){
  	  EmpezarAtaque(this);
  });     
 }
}

function EmpezarAtaque(e){
   if(e.id=="turno_polva"){
   	   Mensaje_turno(e.id);
      pikachu.vida=pikachu.vida-polvasor.ataque;
      pika_vida.innerText=pikachu.vida;
      }   
    else{
    	Mensaje_turno(e.id);
       polvasor.vida=polvasor.vida-pikachu.ataque;
   	   pol_vida.innerText=polvasor.vida;
   }

   Ganador(pikachu.vida,polvasor.vida);
}

function Mensaje_turno(pokemon){
  if(pokemon=="turno_polva"){
  alert("turno de polvasor");
  }
  else{
    alert("turno de pikachu");
  }
}

function Ganador(pi,po){
   if(pi<0){
    polvasor.winner();
    Reiniciar();
   }
   if(po<0){
     pikachu.winner();
     Reiniciar(); 
   }
}

function Reiniciar(){
pikachu.vida=100;
polvasor.vida=100;
pol_vida.innerText=polvasor.vida;
pika_vida.innerText=pikachu.vida;
}

var pikachu={
	vida:100,
	ataque:50,
	winner:function(){
	alert("Pikachu Winner")
	}
}

var polvasor={
     vida:100,
     ataque:45,
     winner:function(){
     alert("Polvasor Winner")	
     }
}