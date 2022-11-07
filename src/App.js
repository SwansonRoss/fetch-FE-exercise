import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [warning, useWarning] = useState([]);

  return (
    <div className="App">
      <Header warning={warning} />
      <Form useWarning={useWarning}/>
    </div>
  );
}

export default App;
