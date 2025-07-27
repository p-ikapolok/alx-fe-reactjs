import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
       <div className="App">
      <Counter />
    </div>
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
