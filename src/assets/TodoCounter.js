import './TodoCounter.css'

function TodoCounter({ completed, total }) { 
  return (
    <>
        <h1 className='Title'> ToDo Organizer </h1>
        <h4 className='TodoCounter'> 
          Has completado 
          <span> {completed} </span>  
          de 
          <span> {total} </span>  
          tareas 
        </h4>
    </>
  );
}

export { TodoCounter };

