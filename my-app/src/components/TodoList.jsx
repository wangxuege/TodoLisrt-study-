import React from 'react'

export const TodoList = ({ taskList, setTaskList }) => {

  const handleDelete = (id) =>{
    // タスクを削除する
    setTaskList(taskList.filter((t) => t.id !== id))
    // console.log(id);
  };

  const handleCompleted = (id) =>{
    // 取り消し線を追加する
    setTaskList(taskList.map((t) =>{
      if(id === t.id){
        return {
          ...t,
          completed: !t.completed,
        };
      }
      return t;
    }));
  };

  
  
  return (
    <div className='todoList'>
      <div className="todos">
        {taskList.map((task,index) =>(
          <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button>
              <i className='fas fa-check' onClick={() => handleCompleted(task.id) }></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
              <i className='fas fa-trash'></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
