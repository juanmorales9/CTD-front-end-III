import './App.css';
import logo from './img/fflogo.png';


import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Article from './Article';


function App() {
  const video = "https://www.youtube.com/embed/DW6Btd0Pce8?autoplay=1&loop=1&mute=1&showinfo=0&controls=0";
  const buttonType = "submit";
  const buttonText = "Download";
  const companyName = "Square Enix";

  return (
    <>
      <Header logo={logo} />
      <Banner>
        <Article buttonType={buttonType} buttonText={buttonText} video={video} />
      </Banner>
      <Footer companyName={companyName} />
    </>
  );
}

export default App;
