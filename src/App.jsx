
// s
import './App.css'
import Bookstore from './bookstore'

// import Todo from './Todo'




function App() {

  // let actors = ["Amir khan","Sakib Khan","Azmir Khan","Salman Khan"]
    
  // let player = [
  //  {nam: "Azmir Uddin", Goal : 56, position : "Stikar"},
  //  {nam: "Lionel Messi", Goal : 1099, position : "Forword"},
  //  {nam: "Martinez", Goal : 290, position : "Forword"}
  // ]
  let books = [
   {nam: "Bangla", price : 56, color : "Yallow"},
   {nam: "Math", price : 1099, color : "Black"},
   {nam: "English", price : 290, color : "red"}
  ]

  return (
    <>


       <Bookstore books={books}></Bookstore>

       {/* <Actor nam = "All Superstar" ></Actor>

        {
          player.map(allplayer => <Actor nam={allplayer} ></Actor> )
        } */}

       {/* {
        actors.map(nayok => <Actor nam={nayok}></Actor>)
       } */}
      {/* <Test></Test>
      <Prectice skill = "Developer"></Prectice>
      <Hero></Hero>
      <Device name = "Desktop" price = "2000"></Device>
      <Device name = "Laptop" price = "8000"></Device>
      <Device name = "Mobile " price = "8500"></Device>
      <Student level = "JSC" roll = "9"></Student>
      <Student level = "SSC" roll = {99}></Student>
      <Student></Student> */}
      {/* <h1>hello</h1> */}
      {/* <Todo text="Learn React" isvalue={true}></Todo>
      <Todo text="Core concept" isvalue={false}></Todo >
      <Todo text="Try Jsx" isvalue={true}> </Todo> */}
    </>
  )
}



function Prectice({ skill }) {
  return (
    <li>Hi Azmir {skill} How are you?</li>
  )
}


function Test() {
  return (
    <div>
      <h1>My React First Prectice</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsum.</p>
    </div>
  )
}


function Hero() {
  const titlestyle = {
    background: "red",
    width: "fit-content",
    margin: "auto"
  }

  let address = {
    country: "Bangladesh",
    jela: "Barayanjang",
    thana: "Sonargaon",
    Village: "Haria"
  }
  return (
    <div>
      <h3 style={titlestyle}>I'm Front End Developer</h3>
      <h3>My country {address.country} my thana {address.thana} </h3>
    </div>
  )
}



function Device(props) {
  return (
    <h2>This Device: {props.name} price : {props.price}</h2>
  )
}


function Student({ level = "HSC", roll = 109 }) {
  return (
    // <h1>My class {props.level} my roll {props.roll}</h1>
    <h1>My class {level} my roll {roll}</h1>
  )
}


export default App