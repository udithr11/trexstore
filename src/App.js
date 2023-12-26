import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Tail from './components/Tail';

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
     <Tail/>
    </div>
  );
}

export default App;




/* Header
 *   Cart
 *  Body
 *    SideBar
 *    Search
 *    ShoppingCards
 *      Card
 *  Tail
 *    ContactUs
 */