import './CreateList.css'
const CreateList =({list, setValue})=>{
    let value 
    return(
        <div>
            <h2 className='title'>Crie tarefas e se organize!</h2>
            <form 
                onSubmit={(evento)=>{
                evento.preventDefault()
                setValue(value)
                }}
            >
                <input clasName='input' onChange={(event)=> value = event.target.value}></input>
                <button className='send' type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default CreateList