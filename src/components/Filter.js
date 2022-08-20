import './Filter.css'

const Filter = ({ changeRange, startRange, endRange }) => {
  
  return (
    <div  className='card m-4 shadow'>
       <div className='card-body text-center bg-primary text-white'>
       <text style={{marginBottom:'2vh',fontSize:'20px',fontWeight:'bold',color:'white'}}>Price Range<br />${ startRange } - ${ endRange }</text>
     <div className='Range mt-3'>
     <input style={{marginBottom:"1vh"}} min='0' className='form-control text-center shadow-sm' type="number" value={ startRange } onChange={(e) => {
        e.preventDefault();
        changeRange('start', e.target.value);
      }} onKeyUp={(e) => {
        e.preventDefault();
        changeRange('start', e.target.value);
      }}/>
      <input min='0' className='form-control text-center shadow-sm' type="number" value={ endRange } onChange={(e) => {
        e.preventDefault();
        changeRange('end', e.target.value);
      }} onKeyUp={(e) => {
        e.preventDefault();
        changeRange('end', e.target.value);
      }}/>
     </div>
       </div>
     
      </div>
  )
}

export default Filter