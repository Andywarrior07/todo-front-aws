import { Task} from "@/components";
import { getTodos } from '@/actions/todos';

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center p-5 pt-10">
      {/* Header */}

      {/* Title and subtitle */}
      <div className="flex flex-col items-center pb-5">
        <h1 className="text-3xl">Hello Nobara</h1>
        <h3 className="text-xl text-gray-500">Ready to start your day?</h3>
      </div>

      {/* Filters */}
      <div className="p-6">Filters</div>

      {/* Tasks */}
      <div className="flex flex-col justify-around">
        {todos?.map((todo: any) => (
          <Task key={todo.id} title={todo.title} description={todo.description} status={todo.status}/>
        ))}
      </div>
    </main>
  );
}
