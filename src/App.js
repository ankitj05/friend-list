import Bar from './components/Bar';
import FriendState from './context/friendState';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="min-h-screen">
      <FriendState>
        <Bar />
        <Body />
        <Footer />
      </FriendState>
    </div>
  );
}

export default App;
