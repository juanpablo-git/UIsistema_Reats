export default (data,{name,id,search})=>{
    console.log("search",search)
    let db = data
    if(search){
         db = data.filter(i=>i.nomeColaborador.toUpperCase().indexOf(search.toUpperCase())>-1)
         return db
        }
    return db
}