import React from 'react'

function Cart({ cartItems, setCart }) {
    const getCartTotal = () => {
        let grandTotal = 0;
        cartItems.map((item, index) => grandTotal += item.price);
        return grandTotal;
    }
  return (
    <>
        <div  className='card m-4 shadow'>
            <div className='card-header bg-primary text-white text-center h4'>Your Cart</div>
       <div className='card-body' style={{ padding: "0.8rem" }}>
       
       { (cartItems.length !== 0) ? <>
            <div className='row'>
                { cartItems.map((elm, index) => (
                    <>
                        <div className='col-lg-12 mb-2'>
                            <div className='card shadow-sm'>
                                <div className='card-body' style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                    <img src={ elm.image } style={ { height: "30px", width: "30px", display: "inline",float: "left" } } className='img-fluid' />
                                    <h5 style={{ display: "inline", marginLeft: "0.6rem", marginTop: "1rem" }}>{ (elm.title).substring(0, 12) }...</h5>
                                    <h6 style={{ display: "inline", marginLeft: "0.6rem", marginTop: "1rem", fontWeight: "bold", float: "right" }}>${ elm.price }</h6>
                                </div>
                            </div>
                        </div>
                    </>
                )) }
            </div>
            <h4 style={{ margin: "0px", float: "right" }}>Grand Total : <strong style={{ color: "green" }}>${ getCartTotal() }</strong></h4>
            
       </> : <>
        <div className='text-center'>
        <img src='/empty.jpg' className='img-fluid' />
        <h3 style={{ margin: "0px" }}>Cart is Empty</h3>
        <a href='#topOfPage' className='btn mt-2' style={{ backgroundColor: "#FF5B51", color: "white" }}>Add Some Products</a>
        </div>
       </> }

       </div>
       { (cartItems.length !== 0) ? <>
        <div className='card-footer bg-white' style={{ border: "0" }}>
        <button className='btn btn-danger' style={{ width: "100%" }} onClick={ (e) => {
            e.preventDefault();
            e.target.innerText = 'Please Wait...';
            setTimeout(() => {
                setCart([]);
            }, 2000);
        } }>Clear Cart</button>
       </div>
       </> : '' }
     
      </div>
    </>
  )
}

export default Cart