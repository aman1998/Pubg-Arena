import React from 'react'
import BackDrop from "./BackDrop";

const Money = (props) => {
    return (
        <> 
        <BackDrop show={props.show} close={props.close} />
        <section className='card-popup'>
            <div>Деньги будут получены в течении нескольких часов</div>
            <button onClick={props.close} className='btn'>Хорошо</button>
        </section>
        </>
    )
}

export default Money