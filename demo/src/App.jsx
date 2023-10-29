// import Demo from './Component/Demo'

// const App = () => {
//   return (
//     <div>
//       <Demo name="value 1" address="kxzhk" price=" 1500"/>
//       <Demo name="value 2" address="kxzhk" price=" 2500"/>
//       <Demo name="add" address="kxzhk" price=" 500"/>
//       <Demo name="del" address="kxzhk" price=" 9500"/>
     
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [count1,setCount1]=useState(0);

// 
  return (
    <div>
    
    hello   {count1}
    <button onClick={() =>  setCount1(count1+1)}>asd</button>
    </div>
  )
}

export default App
