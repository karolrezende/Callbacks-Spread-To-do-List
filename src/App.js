import { useState } from 'react';
import CreateList from './CreateList/CreateList';
import CreateTodo from './CreateTodo/CreateTodo';
import './App.css';

function App() {
  const [list, setList] = useState([])

  function setListValue(value){
    if(value!==undefined){
      setList([...list, {task:value,  id: Math.random()}])
      console.log(list)
    }
  }
  function buttonRemove(id){
    setList(list.filter(task=> task.id !== id))
  }
  return (
    <div className='div-main'>
      <CreateList setValue={setListValue}/>
      <CreateTodo setValue={list.map(taskName=> taskName.task)} setId={list.map(id=> id.id)} buttonRemove={buttonRemove}/>
    </div>
  );
}

export default App;
