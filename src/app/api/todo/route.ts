import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Todo } from "@prisma/client";


export async function POST(request : Request  ){
    const {id , title} : Todo = await request.json();
    const todo: Todo = {
        id , 
        title, 
    }
     const res = prisma.todo.create({
        data: todo,
     })
     return NextResponse.json(res);
    
}

export async function GET(request : Request){

    const todos = await  prisma.todo.findMany({
        // orderBy:{
        //     id : "desc"
        // }
    })

    return NextResponse.json(todos);
}
