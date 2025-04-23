import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Todo } from "@prisma/client";


export async function POST(request : Request  ){
    console.log("POST API called")
    // const { searchParams } = new URL(request.url);
    console.log(request.url)
    // console.log(request.body) // GET requests do not have a body


    const {id , title} : Todo = await request.json();
    const todo: Todo = {
        id , 
        title, 
    }
     const res = await prisma.todo.create({
        data: todo,
     })

     console.log(res , "Todo Created")
     return NextResponse.json(res);
    
}

export async function GET(request : Request){

    console.log("GET API called")
    console.log(request.url)
    

    const todos = await  prisma.todo.findMany({
        orderBy: {
            id: 'asc',
        },
    })

    return NextResponse.json(todos);
}
