import {}from 'react';
import Main from './component/Main/main';
import Navbar from './component/Navbar/navbar';
import Services from './component/Services/services';
import AgentSignup from './component/AgentSignup/agentsignup';
import Products from './component/Products/ourproducts'
import StatsGrid from './component/StatCard/statcard'
import SpecialTrainingBanner from './component/SpecialTraining/specialtraining'
import GetInTouch from './component/GetInTouch/getintouch'
import Testimonail from './component/Testimonial/testimonial'
import InformationOfficerCard from './component/InformationOfficer/informationofficer'
import Payments from './component/PaymentPartner/payment';
import BlogSection from './component/BlogSection/blogsection'
import CallbackForm from './component/Callback/callback';
import Faq from './component/Faq/faq'
import FindUsOnline from './component/FindUsOnline/findusonline'
import Footer from './component/Footer/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <AgentSignup/>
      <Products/>
      <StatsGrid/>
      <SpecialTrainingBanner/>
      <GetInTouch/>
      <Testimonail/>
      <InformationOfficerCard/>
      <Payments/>
      <BlogSection/>
      <CallbackForm/>
      <FindUsOnline/>
      <Faq/>
      
    <Footer/>
    </div>
  );
};

export default App;
