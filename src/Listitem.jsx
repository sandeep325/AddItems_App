import React from 'react';

const  Listitem=(props)=>{

  return <>
  <div className="todo_style">
  <i className="fa fa-times"  aria-hidden="true"  onClick={()=>
                                                        {props.onSelect(props.id);}
                                                         }>X</i>
   <li>{props.text}</li> 
   </div>
   </>;
} ;
export default Listitem;