import './App.css';
import Button from './components/Button';

const App = () => {
  return (
    <div className="App">
      <div className='calc-wrapper'>
        <div className='row'>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;