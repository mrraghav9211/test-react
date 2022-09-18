import React from 'react';

function Left() {
  return (
    <div className='left flex'>
    <div className='up flex'>
        <img className='img' src='https://media-exp1.licdn.com/dms/image/C4E03AQEsEXjhhyINeA/profile-displayphoto-shrink_800_800/0/1626604386823?e=1669248000&v=beta&t=Fvt7zFAuaSLvnLtIok-vU4xH6raVksQO1czLekOzPgA' alt='img'/>
        <span>Ankur </span>
    </div>
    <div className='down'>
        <span>Home</span>
        <span>Deposits</span>
        <span>Others</span>
        <span>Payments</span>
        <span>Settings</span>
    </div>
    </div>
  )
}

export default Left;