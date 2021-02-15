import './App.css';

const randomColor = () => {
  let random =  Math.random().toString(16).substr(-6);
  return '#' + random
} 

const Color = () => {
  const bgColor = randomColor();
  return(
    <div className="box" style={{ backgroundColor: bgColor }}>
      <p>{bgColor}</p>
    </div>
  )
}

const CreateBoxes = () => {
  const boxes = []
  for(let i =0; i< 36; i++){
    boxes.push(<Color />)
  }
  return boxes
}

function App() {
  return (
    <div className="app">
      <div className="boxes">
        <CreateBoxes />    
      </div>
    </div>
  );
}

export default App;
