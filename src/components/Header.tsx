import { Link } from 'react-router-dom';


const Header: React.FC = () => {
 
  return (
    <header className='flex space-x-20 h-10 bg-yellow-700'>
      <h1 className='text-3xl font-bold text-gray-800 text-center'>Dashboard</h1>
   <Link to="/signup">
        <button className=' flex px-3 py-1.5 mr-2 border border-gray-300 rounded-md focus:outline-none bg-yellow-600'>Logout</button>
      </Link>
    </header>
  );
};

export default Header;
