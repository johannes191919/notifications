import React, { useState } from 'react'
import './App.css';
import List from './List';
import List_items from './List_items';
import $ from 'jquery';

function list_make(list_items) {


  return (

    <List
      key={list_items.id}
      profile_pic={list_items.profile_pic}
      people={list_items.person}
      event={list_items.event}
      post={list_items.post}
      club={list_items.club}
      className={(list_items.readed === false) ?
        (list_items.id === 1) ? "unread list_item" : "list_item" &&
          (list_items.id === 3) ? " unread club list_item" : "list_item" &&
            (list_items.id === 7) ? "club list_item" : "list_item" &&
              (list_items.id === 2) ? "unread follow list_item" : "list_item" :
        (list_items.id === 1) ? "list_item" : "list_item" &&
          (list_items.id === 3) ? " club list_item" : "list_item" &&
            (list_items.id === 7) ? "club list_item" : "list_item" &&
              (list_items.id === 2) ? "list_item" : "list_item"}
      dot={list_items.span}
      dot_class_name={(list_items.id === 1 || list_items.id === 3 || list_items.id === 2) ? "dot" : null}
      message={list_items.message}
      img={list_items.img}
      date={list_items.date}
    />)
}


function App() {


  const [unreadMessages, readmessages] = useState(3)

  function markasread() {

    readmessages(0)

    List_items.map(list_items => list_items.readed = true)

  }

  return (<div className='container'>
    <div className='top_page'>  <span className='notifications' > Notifications</span>  <div className='number' >{unreadMessages}</div>
      <button onClick={markasread}>  Mark all as read</button></div>
    <ul>    {List_items.map(list_make)}</ul>

  </div>)
}



export default App;
