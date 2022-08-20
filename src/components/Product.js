import React from 'react'
// import './Product.css';
const Product = ({ attrs, addToCart }) => {
  return (
    <>
      <div className='col-lg-12' style={{ padding: "30px" }}>
      <div className='card shadow-lg ' >
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-3 text-center'>
              <img src={ attrs.image } className='img-fluid' style={{ height: "300px",width: "250px"}} />
            </div>
            <div className='col-lg-9' style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
              <div className='' style={{width: "100%"}}>
                <h1 className='text-primary' style={{ margin: "0" }}>{ (attrs.title).substring(0, 20) }...</h1>
                <h3 className='text-success' style={{ margin: "0" }}>${ attrs.price }</h3>
                <hr />
                <div className='row'>
                  <div className='col-lg-9'>
                    <p style={{ textAlign: "justify" }}>
                      { (attrs.description) }
                    </p>
                  </div>
                  <div className='col-lg-3 text-center'>
                    <button className='btn shadow-sm' onClick={(e) => {
                      e.preventDefault();
                    }} style={{ fontWeight: "bold", backgroundColor: "#FF5B51", color: "white", borderRadius: "20px", paddingLeft: "12px",paddingRight: "12px", width: "150px" }}>Buy Now</button><br />
                    <button className='btn mt-3 shadow' onClick={(e) => {
                      e.preventDefault();
                      addToCart(attrs);
                      e.target.innerText = 'Added';
                      e.target.className = 'mt-3 btn btn-success text-success';
                      setTimeout(() => {
                        e.target.innerText = 'Add To Cart';
                        e.target.className = 'btn mt-3 shadow';
                      }, 1500);
                    }} style={{ fontWeight: "bold", backgroundColor: "#FFFFFF", color: "black", borderRadius: "20px", paddingLeft: "12px",paddingRight: "12px", width: "150px" }}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Product