import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className=' bg-red-300 w-60 h-screen'>
      <nav>
        <ul className='text-center '>
          <li className='border 1px solid p-2'>Account</li>
          <li className='border 1px solid p-2'>Users</li>
          <li className='border 1px solid p-2'>Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
