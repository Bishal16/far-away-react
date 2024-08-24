import Header from './components/header';
import Form from './components/form';
import ItemList from './components/itemList';
import Stats from './components/stats';
import './App.css'

function App() {
  return (
    <div className="App">      
      <Header/>
      <Form />
      <ItemList />
      <Stats />
    </div>
  );
}

export default App;
