'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Todo} from '@prisma/client';
import {useEffect } from 'react';

export default function ListTodo(){

    const [todos , setTodos]  = useState<Todo[]>([])
    const router = useRouter();

    

    return(
        <>
         <div className='flex flex-col gap-4 justify-center items-center h-screen bg-gray-900'>
            <div className= 'text-3xl text-white bg-blue-800'  > List Todo</div>
            <div className='flex flex-col gap-4 '>
                {todos.map((todo)=>(
                    <div key={todo.id} className='bg-gray-800 text-white p-4 rounded-md shadow-md'>
                        <h2 className='text-xl font-bold'>{todo.title}</h2>
                        <p className='text-gray-400'>ID: {todo.id}</p>
                    </div>
                ))}
                </div>

            
            </div>
        
        </>
    )
}
