import { useState } from "react"

function Todolist() {

    const [tasks, setTasks] = useState([]);
    const [hover, setHover] = useState(null);

    function addNewTasks() {
        const newTask = document.getElementById("addNewTasks").value
        if (newTask !== "") {
            document.getElementById("addNewTasks").value = ("");
            setTasks((t) => ([...t, newTask]))
        }

    }

    function deleteItem(index) {
        setTasks((t) => t.filter((_, i) => i !== index))
    }

    function moveUp(index) {
        if (index > 0) {
            const newArr = [...tasks];
            [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]]
            setTasks(newArr)
        }
    }

    function moveDown(index) {
        if (index < (tasks.length) - 1) {
            const newArr = [...tasks];
            [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]]
            setTasks(newArr)
        }
    }

    return (
        <div className="Todolist" >
            <h2>List of tasks to do:</h2>
            <ol>

                {tasks.map((task, index) => (
                    <li key={index}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)} > {task}
                        {
                            hover === index && (
                                <div>
                                    <button onClick={() => deleteItem(index)} className="deleteButton" >Delete</button>

                                    {index > 0 && (
                                        <button onClick={() => moveUp(index)} >Move Up</button>)}
                                    {index < (tasks.length) - 1 && (
                                        <button onClick={() => moveDown(index)} >Move Down</button>)}

                                </div>
                            )
                        }



                    </li>
                ))}

            </ol>

            <input type="text" placeholder="Enter to add tasks" id="addNewTasks" />
            <button onClick={addNewTasks} > Add Task </button>
            <br />


        </div>

    )

}
export default Todolist