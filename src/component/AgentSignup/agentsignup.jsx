import {} from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/agentsignup/agent.png';

const AgentSignup = () => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signupagent');
  };

  return (
    <div className="flex items-center justify-center" style={{ backgroundColor: '#024F97', height: '35vh' }}>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-white">
          <div className="flex items-center mb-4">
            <img src={image} alt="Agent" className="w-16 h-16 mr-2" />
            <span className="text-2xl font-bold">Become a Life Insurance Agent</span>
          </div>
          <button onClick={navigateToSignup} className="px-6 py-3" style={{ backgroundColor: '#F05A27', borderRadius: '0.375rem', color: '#FFF', fontWeight: '600' }}>
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSignup;