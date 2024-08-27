import Header from './components/header';
import Form from './components/form';
import ItemList from './components/itemList';
import Stats from './components/stats';
import './App.css'
import { useState, useEffect } from 'react';
function App() {

  const[items, setItems] = useState([]);
  const[packed, setPacked] = useState(0);

  
  function handleAddItem (newItem){
    setItems(items => [...items, newItem])
  }  

  function handleDeleteBtn(id){
    setItems((items) => items.filter((item) => item.id !== id ));
    console.log(items)
  }

  function handleCheck(id) {
    setItems(prevItems =>
        prevItems.map(item => item.id === id ? { ...item, packed: !item.packed } : item                
        )
    );
  } 
  useEffect(() => {
    const total = items.length;
    const packedCount = items.filter(item => item.packed).length;
    const percent = total === 0 ? 0 : ((packedCount / total) * 100).toFixed(2);
    setPacked(percent);
  }, [items]);


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
