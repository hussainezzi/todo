import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Todo App</h1>
        <p className="text-gray-700 mt-2">Organize your tasks and boost your productivity!</p>
      </header>
      <main className="flex flex-col items-center space-y-4">
      <Link href="/createTodo" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
          
          Create Todos
       
      </Link>
        <Link href="/listTodo" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
          
            View Todos
         
        </Link>
      </main>
      <footer className="mt-12 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </footer>
    </div>
  );
}
