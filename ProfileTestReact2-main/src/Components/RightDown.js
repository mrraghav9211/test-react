import React from 'react';
import Nav from './Nav';
function RightDown() {
  return (
    <div className='rightdown flex'>
      <h3 className='h'>Closed Deposits</h3>
    <Nav/>
    <div>
      <br/>
      <div className='detail1'>
      <img src='http://cdn.shopify.com/s/files/1/0151/0741/products/2eb777cbd3fbc61654555b527b5e6e91_1024x1024.jpeg?v=1578635370' alt='img'/>
      <span>771 Lost Round</span>
      <span>3 February 2030</span>
      <span>$3300</span>
      <span>$6900</span>
      <span>Awaiting Bank Processing</span>
      <span></span>
    </div>
    <br/>
      <div className='detail1'>
      <img src='http://cdn.shopify.com/s/files/1/0151/0741/products/2eb777cbd3fbc61654555b527b5e6e91_1024x1024.jpeg?v=1578635370' alt='img'/>
      <span>1491 Jaggad Arbor</span>
      <span>12 January 2020</span>
      <span>$2500</span>
      <span>$7500</span>
      <span>Expired No Payment Recieved</span>
      <span></span>
      </div>
      <button className='button'>ALL CLOSED DEPOSITS</button>
    </div>
    </div>
  )
}

export default RightDown;