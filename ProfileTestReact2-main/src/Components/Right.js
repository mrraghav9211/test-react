import React from 'react';
import RightUp from './RightUp';
import RightDown from './RightDown';

function Right() {
  return (
    <div className='right flex'>
      <div className='top'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7FFha25u_w-azPq1hq2Ya1rChxrVWlX2a3sZFv0&s' alt="img"/>
        <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEsEXjhhyINeA/profile-displayphoto-shrink_800_800/0/1626604386823?e=1669248000&v=beta&t=Fvt7zFAuaSLvnLtIok-vU4xH6raVksQO1czLekOzPgA' alt="img"/>
      </div>
      <RightUp/>
      <RightDown/>
    </div>
  )
  }
export default Right;
