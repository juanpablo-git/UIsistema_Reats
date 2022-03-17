import rows from "../components/Chamados/rous.json"
export default (event)=>{
var db = rows
console.log( db.filter(
    
    item=>item.idChamado.toString().indexOf(event.target.value.toString())>-1 || 
    item.nomeColaborador.toString().toUpperCase().indexOf(event.target.value.toString().toUpperCase())>-1
) )
 // console.log( db.filter(item=>item.id.toString().indexOf(event.target.value.toString())>-1) )
}