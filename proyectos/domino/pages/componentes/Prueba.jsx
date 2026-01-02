import { useState } from "react"

export default function Prueba({sumador,objet}){




  return <div >
{sumador.map( (e)=>{ return <div key={e.id}>
<h2>{e.numero}</h2>
</div> } )}


  </div>  
}