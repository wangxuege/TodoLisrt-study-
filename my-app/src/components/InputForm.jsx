import React, { useState } from 'react'

export const InputForm = ({ taskList, setTaskList }) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    // inputに打ち込んだ文字をconsoleに出力する
    // console.log(inputText);

    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        id:taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    console.log(taskList);

    // 入力した文字を消す
    setInputText("");
  };

  const handleChange = (e) =>{
    setInputText(e.target.value);
  };

  return (
    <div className='inputForm'>
      <form onSubmit={ handleSubmit }>  {/*handleSubmitを実行してから送信する*/}
        <input type="text" onChange={ handleChange } value={inputText}/> {/*入力した文字が変わるたびにhandleChangeが実行される*/}
        <button>
          <i className='fas fa-plus-square'></i>
        </button>
      </form>
    </div>
  );
}
