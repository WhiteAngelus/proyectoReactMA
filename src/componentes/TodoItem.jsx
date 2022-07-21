import React from 'react';




export function TodoItem({todo,cambiarEstado}){
    const {id,tarea,des,completed}=todo;

    const fnCambiarEstado = () =>{
        cambiarEstado(id);
    }
    
    return <div className="container mx-auto">
      <div className="row ">
        <div className="col-lg-4">
            <div className="card bg-warning mb-5">
        <h3 className="card-title bg-warning text-black text-center">{todo.tarea}</h3>
        <h6 className="card-subtitle bg-warning text-black">{todo.des}</h6>
            <div className='mb-5'></div>
            
            </div>
</div>
<div>
      
      </div>
      </div>
      </div>
      
        

 
    



    

/*<div className="card wrapper bg-black text-center text-danger bg-dark animate__animated animate__fadeInUp"><h1>{tarea}</h1>
<div className='card-head w-20 text-caution'><p className='text-light'>{des}</p></div>
<div class="card" style="width: 18rem;">
    
    
  
    
    
    
    /*return <div className="container">
        <div className="row-4 ">
            <div className="col-lg-3">
    <div className='card m-4 bg-warning text-black'>
        <input type="checkbox" checked={completed} onChange={fnCambiarEstado} className='card m-4 form-checked-input me-3'></input >
        {tarea} </div>
        </div>
        </div>
        </div>*/
}