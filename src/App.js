import Bar from './components/Bar';
import FriendState from './context/friendState';

function App() {

  return (
    <div className="h-screen">
      <FriendState>
        <div className="mx-96">
          <Bar />
        </div>
      </FriendState>
    </div>
  );
}

export default App;
