import React, { useState, useEffect } from 'react'
import './Category.css'

const Category = ({ cats, currCategory, changeCategory }) => {


  return (
    // <div className='Category'>
    //   <text style={{marginBottom:'2vh',fontSize:'20px',fontWeight:'bold',color:'GrayText'}}>Category</text>
    //   <Dropdown
    //     label="Electronics"
    //     options={[
    //       { value: 'Laptops' },
    //       { value: 'Mobiles' },
    //     ]}
    
    //   />
    //   <Dropdown
    //     label="Clothing"
    //     options={[
    //       { value: 'Mens' },
    //       { value: 'Womens' },
    //     ]}
        
    //   />
    //   </div>
    <>
      <div className='card m-4 shadow'>
        <div className='card-header p-3 text-center h4 text-muted' style={{ backgroundColor: "white", border: "none" }}>
          Categories
        </div>
        <div className='card-body p-4'>
          { (cats.length !== 0) ? <>

            <div >
            { cats.map((elm, index) => (
              <>
                <div className='card mb-2 shadow-sm'  style={{ borderRadius: "40px" }}>
                  {
                    (currCategory === elm) ? <div className='card-body text-center bg-primary text-white'  style={{ borderRadius: "40px" }}>
                    <strong>{ (elm).charAt(0).toUpperCase() + (elm).slice(1, (elm.length)) }</strong>
                  </div> : <>
                  <a href='#' style={{ textDecoration: "none" }} onClick={(e) => {
                    e.preventDefault();
                    changeCategory(elm);
                    // setCurrCategory(elm);
                  }}>
                  <div className='card-body text-center text-muted' >
                  { (elm).charAt(0).toUpperCase() + (elm).slice(1, (elm.length)) }
                  </div>
                  </a>
                  </>
                  }
                  
                </div>
              </>
            )) }
    
  </div>


            {/* <ul style={{ listStyle: "none", margin: "0px" }}>
            { categories.map((elm, index) => (
              <li className='alert alert-danger'>{ elm }</li>
            )) }
            </ul> */}
          </> : <div className='alert alert-danger'>Please wait...</div> }
        </div>
      </div>
    </>
  )
}

const Dropdown = ({ label, options }) => {
  return (
    <div className='drop'>
    <text >{label}</text>
    <ul className='Dropdown'>
      {options.map((option)=>(
           <li>{option.value}</li>
      ))}
    </ul>
    </div>
  );
};

export default Category