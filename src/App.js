import Bar from './components/Bar';
import FriendState from './context/friendState';

function App() {
  //px-4 mt-6 mx-96
  return (
    <div className="min-h-screen">
      <FriendState>
        <Bar />
      </FriendState>
    </div>
  );
}

export default App;
