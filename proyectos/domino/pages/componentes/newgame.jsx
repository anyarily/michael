import Prueba from "./Prueba"
import style from"./style.module.css"
import Cortos from "./cortos"
import { useState } from "react"

export default function Newgame(){

  let [puntolargo,setpuntolargo]=useState("")
let [bulian,setbulian]=useState(true)
let [ sumador,setsumador ]=useState([])
let [objet,setobjet]=useState(0 )

function agregadolargo (){
  setbulian(true)
  let id=0
  let sumando= sumador.length -1
  id= sumando + 1


setsumador( [...sumador,{ numero: objet, id:id}])

let mas= sumador.length + 1

}




function agregado(){

  setbulian(false)
}

  return <div >
  <h1 className={style.titulo}>DOMINOS PLUS</h1>



<div className={style.anotes}>


  <div>
 <button className={style.largo} onClick={function(){agregado()}} >largos</button>
 <Prueba objet={objet}  sumador={sumador} />
  </div>

<h1>{bulian? " " :  <div className={style.nota}> <button className={style.bb} onClick={function(){ agregadolargo() }}>0k</button> <input onChange={function(e){setobjet(e.target.value) }} className={style.in}></input>  </div>   }</h1>
 <div>
  <button  className={style.corto}>cortos</button>
<Cortos/>
 </div>

</div>

  </div>
}