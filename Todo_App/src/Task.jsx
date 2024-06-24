/* eslint-disable react/prop-types */

export const Task=(props)=>{
    return(
      <>
      <div className="task" key={props.index}>
        <h1>{props.task}</h1>{" "}
        <button
          className="delete-task"
          onClick={() => props.deleteTask(props.task)}
        >
          Delete
        </button>
      </div></>
        

);}
