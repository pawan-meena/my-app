import React,{useState} from 'react';
import './style.css';
import Menu from './menuApi.js';
import Card from './Card.js';
import {Menubar} from './Menubar.js';
const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  
const Resturant = () => {
    const [state, setstate] = useState(Menu);
    const [menud, setmenud] = useState(uniqueList)
    const filter=(category)=>{
    
        const uplist=Menu.filter((live)=> {
        return live.category===category;
        })
        setstate(uplist)
        if (category==="All") {
          setstate(Menu);
        }
    }
    return (
     <>
     <Menubar filter ={filter} menud={menud}/>
     <Card state={state}/>;
     </>
    );
};
export default Resturant;
