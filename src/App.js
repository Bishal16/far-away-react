import Header from './components/header';
import Form from './components/form';
import ItemList from './components/itemList';
import Stats from './components/stats';
import './App.css'
import { useState } from 'react';
function App() {

  const[items, setItems] = useState([]);
  const[packed, setPacked] = useState(0);

  
  function handleAddItem (newItem){
    // console.log("before new item")
    // console.log(items);
    setItems(items => [...items, newItem])
    setPacked(items => {

      return 11;
    })
  }  

  function handleDeleteBtn(id){
    setItems((items) => items.filter((item) => item.id !== id ));
  }

  function handleCheck(id) {
    setItems(prevItems =>
        prevItems.map(item => item.id === id ? { ...item, packed: !item.packed } : item                
        )
    );
};


  return (
    <div className="App">      
      <Header/>
      <Form onAddItems={handleAddItem} />
      <ItemList items={items} onDeleteItem={handleDeleteBtn} onChecked={handleCheck}/>
      <Stats packed={packed}/>
    </div>
  );
}

export default App;
