import React from 'react';
import './App.css';
import Home from './component/Home.jsx';
import { Provider } from "react-redux";
import {store,persistor} from "./Store/index"

import { PersistGate } from 'redux-persist/integration/react'



class App extends React.Component {
  render() {
    return (


      <Provider store={store}>

<PersistGate persistor={persistor}>
        <div className='firstDiv' >
          <h1 className='todohead'>
            <Home />
          </h1>
        </div>
        </PersistGate>


      </Provider>


    )
  }
}

export default App;



























//   About Component



// import React from 'react';

// import About from './component/About';


// class App  extends React.Component{
// render(){
//   return(

//     <div className='firstDiv' >
// <h2>hellow world</h2>

// <h1>  <About  name="Hellow beerbal"/>  </h1>

//     </div>


//   )
// }
// }

// export default App;






// Beerbal Component

// import React from 'react';

// import  Beerbal from './component/Beerbal';


// class App  extends React.Component{
// render(){
//   return(

//     <div  >


// <Beerbal><h1 style={{backgroundColor:"green" ,textAlign:"center"}} >I love you beer....</h1></Beerbal>

//     </div>


//   )
// }
// }

// export default App;








