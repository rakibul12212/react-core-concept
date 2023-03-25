import logo from './logo.svg';
import './App.css';

const number =55;
const singers=[
  {name: 'Partho', job:'singer'},
  {name: 'Nirob', job:'singer2'},
  {name: 'Taqi', job:'shopno'},
  {name: 'Saif', job:'pathor'}
]


const singleStyle={
  color: 'purple',
  backgroundColor:'grey',
}

function App() {
  const nayoks =['Rubel','Bappi','Kuber Majhi','Jashim','Salman Shah','Bappa Da','Riyaj','Razzak','salman']
  
  return (
    
    <div className="App">
    {
      nayoks.map(nayok => <li>Name: {nayok}</li>)
    }
    {/* {
      nayoks.map(nayok => <Person name={nayok}></Person>)
    } */}
    
    {
      singers.map(singer => <Person name={singer.name}></Person>)
    }
    

      {/* <Person name={nayoks[0]} nayika=" Moushomi"></Person>
      <Person name={nayoks[1]} nayika=" Pori moni"></Person>
      <Person name={nayoks[2]} nayika=" Kopila"></Person> */}
      
      <h5>New Component</h5>
      <p>Pera Nai Chill</p>
      <Friend name="Fahim" title="Nari kheyko"></Friend>
      <Friend name="Pal" title="Gandu"></Friend>
      
     
    </div>
  );
}

function Person(props){
  console.log(props);
   return (
   <div className='person'>
    <h1>{props.name}</h1>
   {/* <p>Nayika:{props.nayika}</p> */}
   </div>
    )
}

function Friend(props){
  console.log(props);
  return (
    <div className='container'>
      <h3>{props.name}</h3>
      <p>Title: {props.title}</p>
    </div>
  )
}
export default App;
