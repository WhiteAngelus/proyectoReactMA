import React, { Fragment, useState,useRef } from 'react';
import { TodoItem } from './TodoItem';
import {v4 as uuid } from 'uuid'; 


export function TodoList(){
    // Creamos un arreglo con los item o tareas
    const [todos,setTodos]=useState([
        

    ])


    const desRef=useRef();

    const taskRef = useRef();

    const agregarTarea = () => {
        const des = desRef.current.value;
        const tarea = taskRef.current.value;
        const id = uuid();
        if (tarea ==="" ) {
            return;
        }
        setTodos((prevTodos)=> {
            const newTarea = {
                id:id,
                tarea:tarea,
                des:des,
            }

            return [...prevTodos,newTarea,]
        })
        taskRef.current.value=null;
        desRef.current.value=null;
    }



    const cantidadTareas = () =>{
        return todos.filter((todo)=>!todo.completed).length;
    }

    const cambiarEstadoTarea = (id) =>{
        //hacemos una copia del listado original
        const newTodos = [...todos];
        //buscamos el item dentro del listado
        const todo = newTodos.find((todo)=>todo.id===id)
        // cambia el estado a no completado (del item encontrado)
        todo.completed = !todo.completed;
        // Actualizamos el listado
        setTodos(newTodos);
    }

    const eliminarTareasCompletadas = () =>{
        const newTodos = todos.filter((todo)=>!todo.completed);
        setTodos(newTodos);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row-4">
                    <div className="col">
                    
            <h1 className='text-primary'>Post it simulator</h1>
            <div className='input-group mb-3'>
                <input ref={taskRef} type="text" className='form-control m-3' placeholder='Titulo'/>
                <input ref={desRef} type="text" className='form-control m-3' placeholder='Descripción'/>
                
                <input type="checkbox" className='mt-4' ></input>
                
                <p className='m-4'><font color="#FFFFFF">Importante</font> </p>


                <button onClick={agregarTarea} className='btn btn-success m-3 bg-black' >Agregar</button>
                <button onClick={eliminarTareasCompletadas} className='btn btn-danger m-3' >X</button>

            </div>



            <div className="container">
                <div className="row-4">
                    <div className="col">
                        <div className="card-deck">
                        {todos.map((todo)=>(
                        <TodoItem todo={todo} key={todo.id}>
                        </TodoItem> ))}
                        </div>
                    </div>
                </div>
            </div>





            </div></div>
            </div>
            
        </Fragment>
    )
}




  