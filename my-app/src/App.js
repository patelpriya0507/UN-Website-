import logo from './logo.svg';
import './App.css';
import UNPhoto from './components/UNPhoto/UNPhoto';
import Calendar from './components/Calendar/Calendar';
import Broadcast from './components/Broadcast/Broadcast';


function App() {
  return (
    <div className="un-column-wrapper">
      <UNPhoto />
      <div className="row">
        <Broadcast />
        <Calendar />
      </div>
    </div>
  );
}


export default App;
