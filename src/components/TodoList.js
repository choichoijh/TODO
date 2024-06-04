import React, { useEffect, useState } from 'react';
import CreateTaskPopup from '../modals/CreateTask';
import Card from './Card';
import '../App.css'; // styles.css 파일을 import

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    const deleteTask = (index) => {
        let tempList = taskList.slice();
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
    };

    const updateListArray = (obj, index) => {
        let tempList = taskList.slice();
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = (taskObj) => {
        let tempList = taskList.slice();
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    return (
        <div className="container">
            <div className="todo-header">
                <h1>TodoList</h1>
                <button className="create-task-btn" onClick={toggle}>Create Task</button>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj, index) => (
                    <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
                ))}
            </div>
            <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />
        </div>
    );
};

export default TodoList;
