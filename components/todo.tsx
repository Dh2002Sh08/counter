// 'use client';

// import { useState, useEffect } from 'react';
// import { useContract } from '@/hooks/useContract';
// import { useTonConnect } from '@/hooks/useTonConnect';
// import { TonConnectButton } from '@tonconnect/ui-react';

// export function Todo() {
//   const [todos, setTodos] = useState<{ task: string; completed: boolean }[]>([]);
//   const [newTask, setNewTask] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const { connected } = useTonConnect();
//   const {  createTodo, numTodos, todoParentAddress } = useContract();

//   useEffect(() => {
//     loadTodos();
//   }, []);

//   const loadTodos = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//     //   const todoList = await getAllTodos();
//     //   setTodos(todoList);
//     } catch (error) {
//       console.error('Error loading todos:', error);
//       setError('Failed to load todos. Please check if the contract is deployed and try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCreateTodo = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!newTask.trim()) return;

//     try {
//       setError(null);
//       await createTodo(newTask);
//       setNewTask('');
//       await loadTodos();
//     } catch (error) {
//       console.error('Error creating todo:', error);
//       setError('Failed to create todo. Please try again.');
//     }
//   };

//   const handleCompleteTodo = async (index: number) => {
//     try {
//       setError(null);
//     //   await completeTodo(BigInt(index));
//       await loadTodos();
//     } catch (error) {
//       console.error('Error completing todo:', error);
//       setError('Failed to complete todo. Please try again.');
//     }
//   };
//   console.log('Todos:', todos);
//   console.log("Number of todos:", todos.length);

//   if (!connected) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect Your Wallet</h2>
//           <p className="text-gray-600 mb-4">Please connect your TON wallet to manage your todos.</p>
//           <TonConnectButton />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">TON Todo List</h1>
//             <TonConnectButton />
//           </div>
//           <p> Number of todos</p>
//           <p className="text-lg font-semibold text-gray-700 mb-4">{numTodos ?? "Loading...."}</p>

//           {error && (
//             <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-red-600">{error}</p>
//             </div>
//           )}
          
//           <form onSubmit={handleCreateTodo} className="mb-8">
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 placeholder="Add a new task..."
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
//               >
//                 Add Task
//               </button>
//             </div>
//           </form>

//           {isLoading ? (
//             <div className="flex justify-center items-center py-8">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {todos.length === 0 ? (
//                 <p className="text-center text-gray-500 py-8">No todos yet. Add one above!</p>
//               ) : (
//                 todos.map((todo, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
//                   >
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={() => handleCompleteTodo(index)}
//                         className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
//                           todo.completed
//                             ? 'bg-green-500 border-green-500'
//                             : 'border-gray-300 hover:border-blue-500'
//                         }`}
//                       >
//                         {todo.completed && (
//                           <svg
//                             className="w-4 h-4 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         )}
//                       </button>
//                       <span
//                         className={`text-lg ${
//                           todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
//                         }`}
//                       >
//                         {todo.task}
//                       </span>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
