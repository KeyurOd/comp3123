import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Info from './student_info';

function App() {
  return (<div className='App'>
    <img style={{height:'700px',width:'700px'}} src = {logo} alt = 'App Logo'/>
    <Welcome></Welcome>
    <Info fname="Keyur" lname=" Odedara" stuID="101413667"/>
  </div>
  );
}

export default App;
