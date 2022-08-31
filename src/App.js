// import './App.css';
import Banner from './Components/Banner/Banner';
import DeeperWork from './Components/DeeperWork/DeeperWork';
import Footer from './Components/Footer/Footer';
import Slack_Review from './Components/Slack_Review/Slack_Review';
import Team from './Components/Team/Team';
import Tools from './Components/Tools/Tools';
import Welcome from './Components/Welcome/Welcome';
import Work from './Components/Work/Work';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Team/>
      <Work/>
      <Tools/>
      <Slack_Review/>
      <DeeperWork/>
      <Welcome/>
      <Footer/>
    </div>
  );
}

export default App;
