import React from 'react';

export default function ProCard(props) {
  return(
    <section id="ProCard">

        <div className="card-wrapper">
            <img src={props.img} alt="" style={{borderRadius:'20px', overflow:'hidden', width: '100%'}}/>   
             
                 </div>
    </section>
  )
}