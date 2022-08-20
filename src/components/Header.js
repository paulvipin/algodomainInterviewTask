import React from 'react'
import './Header.css'

const Header = ({ cartItems, searchProducts, searchTerm, setSearchTerm }) => {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FF5B51" }}>
    <div className="container" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <a href="#" className="navbar-brand text-white" style={{ fontWeight: "bold" }}>Shopping</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
                {/* <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#" className="nav-item nav-link">Profile</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">Inbox</a>
                        <a href="#" className="dropdown-item">Sent</a>
                        <a href="#" className="dropdown-item">Drafts</a>
                    </div>
                </div> */}
            </div>
            
            <div className="navbar-nav">
            <div className="input-group m-2" style={{ width: "100%" }}>                    
                    <input type="text" className="form-control" value={ searchTerm } onChange={ (e) => {
                      if(e.target.value.length !== 0){
                        setSearchTerm(e.target.value);
                      } else {
                        setSearchTerm('');
                        searchProducts(searchTerm);
                      }
                    } } placeholder="Search" />
                    <button type="button" className="btn btn-secondary" onClick={(e) => {
                      e.preventDefault();
                      searchProducts(searchTerm);
                    }}><i className="bi-search"></i></button>
                </div>
            </div>
        </div>
    </div>
</nav>
    </>
    // <div className='Header'>
    //   <text>Shopping</text>
      
    //   <div className='Search-Bar'>
    //     <input className='form-control' type="text" placeholder='search items' style={{ width: "80%", borderRadius: "20px", paddingLeft: "1.2rem",  paddingRight: "0.8rem" }} onChange={ (e) => {
    //       searchProducts(e.target.value);
    //     } }/>
    //     <button className='btn btn-primary' style={{ backgroundColor: "#1349D3", borderRadius: "20px", paddingLeft: "1rem", paddingRight: "1rem" }} onClick={ (e) => {
    //       e.preventDefault();
    //       e.target.innerText = 'Please Wait...';
    //       // searchProducts();
    //       setTimeout((r) => {
    //         e.target.innerText = 'Search';
    //       }, 2000);
    //     } }>Search </button>
    //     Cart Items { cartItems.length }
    //   </div>
    
   
    // </div>
  )
}

export default Header
