import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {Routes,Route} from 'react-router-dom';
import Cards from './Components/Cards';
import CardDetails from './Components/CardDetails';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/carts/:id' element={<CardDetails/>}/>
     <Route path='/' element={<Cards/>}/>
     </Routes>
    </div>
  );
}

export default App;
