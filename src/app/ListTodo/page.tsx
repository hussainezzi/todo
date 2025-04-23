import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Todo} from '@prisma/client';
import {useEffect } from 'react';

export default function ListTodo(){

    const [todos , setTodos]  = useState<Todo[]>([])
    const router = useRouter();
    
    

    return(
        <>
         <div className='flex flex-col justify-center items-center bg-grey-500'>
            <div classNa-me='text-3xl text-white bg-blue-800'> List Todo</>

            
            </div>
        
        </>
    )
}
