import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { DLT, ADD, REMOVE } from '../redux/actions/action';

const CardsDetails = () => {

  const [data, setData] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata)
  }

  // add data
  const send = (e) => {
    dispatch(ADD(e));
  }

  useEffect(() => {
    compare();
  }, [id])

  const dlt = (id) => {
    dispatch(DLT(id))
    history("/");
  }

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }

  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Items Detail Page</h2>

        <section className='container mt-3'>
          <div className='iteamsdetails'>

            {
              data.map((ele) => {
                return (
                  <>

                    <div className='items_img'>
                      <img src={ele.imgdata}></img>
                    </div>

                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p style={{ background: "transparent", color: "#fff" }}> <strong>PRODUCT</strong> : {ele.rname}</p>
                            <p style={{ background: "transparent", color: "#fff" }}> <strong>Price </strong> : ₹ {ele.price}</p>
                            <p style={{ background: "transparent", color: "#fff" }}> <strong>Total  </strong> : ₹ {ele.price * ele.qnty}</p>
                            <div style={{ background: "transparent", color: "#fff", cursor: "pointer" }} className='mt-5 d-flex justify-content-between align-items-center' >
                              <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                              <span style={{ fontSize: 24 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                            </div>
                          </td>
                          <td>
                            <p style={{ background: "transparent", color: "#fff" }}> <strong>Rating</strong> : <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                            <p style={{ background: "transparent", color: "#fff" }}> <strong>Order Review </strong> : {ele.somedata}</p>
                            <p style={{ background: "transparent", color: "#fff" }}> <strong>Remove  </strong> : <i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: "20px", cursor: "pointer" }}></i></p>
                          </td>
                        </tr>
                      </Table>
                    </div>

                  </>
                )
              })
            }

          </div>
        </section>

      </div>
    </>
  )
}

export default CardsDetails