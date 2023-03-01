import './CreateTodo.css'
function CreateTodo({setValue, buttonRemove, setId}){
    return(
        <div className='div-todo'>
            {setValue.map((task) => <div className='task'>{task}</div>)}
            {setId.map((id)=> <button className='remove' onClick={()=>buttonRemove(id)}>Completar</button> )}
        </div>
    )
}
export default CreateTodo