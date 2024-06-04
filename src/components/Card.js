import React, { useState } from 'react';
import EditTaskPopup from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            deleteTask(index);
        }
    };

    const createdTimeStyle = {
        position: "absolute",
        top: "5px",
        right: "5px",
        color: colors[index % 5].primaryColor,
        fontSize: "0.8em"
    };

    const completedStyle = {
        color: colors[index % 5].primaryColor,
        fontSize: "0.8em",
        cursor: "pointer"
    };

    return (
        <div className="card-wrapper mr-5" style={{ position: "relative" }}>
            <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}>
                <span style={createdTimeStyle}>{taskObj.CreatedAt}</span>
            </div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>
                    {taskObj.Name}
                </span>
                <p className="mt-3">{taskObj.Description}</p>
                <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                    <button style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}>Edit</button>
                    <div style={{ display: "inline-block", marginLeft: "10px" }}>
                        <input type="checkbox" onChange={handleCheckboxChange} />
                    </div>
                    <span style={completedStyle}>완료</span>
                </div>
            </div>
            <EditTaskPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;
