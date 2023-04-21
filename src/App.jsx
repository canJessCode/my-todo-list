import './App.css'

import { Fragment, useState } from 'react'

function App() {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  };




  return (
    <Fragment>
      <div className='modal'>
        <h1> Cool kids's Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Add Todo</button>
          <ul>

            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}


          </ul>
        </form>
      </div>
    </Fragment>
  );
}



export default App;
