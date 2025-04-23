import React, { useState } from 'react';

export default function CreateTodo() {
    const [title, setTitle] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000) + 1;
        const todo = { id, title };
        console.log(todo);

        fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then((res) => {
            if (res.ok) {
                console.log("Todo Created");
                alert("Todo Created");
                setTitle(''); // Clear the input field after submission
            }
        })
        .catch((err) => {
            console.log(err);
            alert("Error creating Todo");
        });
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h2 text-2xl font-bold bb-4">Create Todo</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                <input 
                    type="text"
                    name="title"
                    placeholder="Enter Todo Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded p-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Create the Todo
                </button>
            </form>
        </div>
    );
}
