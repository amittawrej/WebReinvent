
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';


const Dashboard= () => {
  return (
    <div className="dashboard">
      <Header />
      <div className='flex'>
        <Sidebar />
        <MainContent />
        
      </div>
    </div>
  );
};

export default Dashboard;