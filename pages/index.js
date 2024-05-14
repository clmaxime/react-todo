import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

useEffect(() => {
 todos.length > 0 && localStorage.setItem("todo", JSON.stringify(todos))
}, [todos])
  
  function addTask(e) {
    e.preventDefault()
   task != null ? setTodos([...todos, task]) : console.log('null')
  }

  function showTasks() {
    return localStorage.getItem('todos');
  }

  function deleteTask(index) {
    //console.log("toto", todos[index])
   const newValue = todos.filter((e, i) => i !== index)
    localStorage.setItem("todo", JSON.stringify(newValue))
    setTodos(newValue)
    console.log(newValue)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
         <form onSubmit={addTask}>
         <input type="text" id="task" placeholder="Nouvelle tâche" onChange={(e) => setTask(e.target.value)}></input>
          <button id="btn">Ajouter</button>
         </form>
          <table>
            <thead>
              <tr>
                <td>Tâches</td>
              </tr>
            </thead>
            <tbody id="tasks">
             {todos.map((todo, index) => {
                  return  (
                  <tr key={index}>
                    <td>
                      {todo} <button onClick={() => deleteTask(index)}>X</button>
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        <p>test</p>
        </div>
      </main>
    </>
  );
}
