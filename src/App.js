import React, { useState } from 'react';
import  Listitem from './Listitem';
const App=()=>{
 const[item,setNewItem]=useState("");
const[arItems, setArItems]=useState([]);


 const itenmEvent=(event)=>
 {
  //  console.log(event.target.value);
   setNewItem(event.target.value);
 };
 const itemAdd=()=>{
 setArItems((olditems)=>{
   return [...olditems,item];
 });
     
 setNewItem("");
 };



 const deleteItem=(id)=>{
//  console.log("boom delete");
setArItems((olditem)=>{
  return olditem.filter((arrElem,index)=>{
    return index !==id;
  })
})

 };
return (
      <>
      <div className="main_div">
        <div className="center_div  bgtext">
        <i className="i_style">Developed by Sandeep <b>- REACT APP</b></i>

          <br/>
          <h1> <b className="b_style">✡️</b> Add Items</h1>
          <br/>
          <input type="text" placeholder="type item here." value={item} onChange={itenmEvent}/>
          <button onClick={itemAdd}>+</button>

          <ol>

             {arItems.map((itemval,index)=>{
               
               return <Listitem text={itemval}
                       key={index}
                       id={index}
                       onSelect={deleteItem}
                      />;
             })}
          </ol>
        </div>
      </div>

      </>
    );

};
export  default  App; 