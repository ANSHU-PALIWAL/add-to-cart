import React, { useState } from 'react'
import Cardsdata from './CardsData';
import "./style.css"
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {
    const [data, setData] = useState(Cardsdata);

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e));
    }

    return (
        <>
            <div className='container mt-3'>
                <h2 className='text-center'>MY FAVOURITES</h2>
                <div className='row d-flex justify-content-center align-items-center'>
                    {data.map((element, id) => {
                        return (
                            <figure className="snip1278 hover">
                                <h4>{element.rname}</h4>
                                <div className="image">
                                    <img src={element.imgdata} style={{ height: "16rem" }} alt="sq-sample22" />
                                </div>
                                <div className="rating">₹ {element.price}</div>

                                <a href="#" className="add-to-cart" onClick={() => send(element)}>Add to Cart</a>
                            </figure>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cards