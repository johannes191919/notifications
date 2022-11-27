
import React from 'react'

function List(props){


    return( 
 <li    className= {props.className} >
                <img src={props.profile_pic} ></img>
                <div className='content'>
                <span className="name">{props.people}</span>
                <span className="event">{props.event}   </span>
                <span className='post'>{props.post}  <span className={props.dot_class_name} >{props.dot}</span>  </span>
                <span className='club'> {props.club}</span>
                <p className='date' >{props.date}  </p>

                </div>


                <p className="message">{props.message}</p>
                <img className="pic" src={props.img} ></img>
                

            </li>

 
 
    )
}
export default List;