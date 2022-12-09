import { GoBell, GoCloudDownload } from 'react-icons/go';
import Button from './components/Button';

const App = () => { 

    const handleClick = () => {
        console.log('Clicked Success Button')
    }

  return (
    <div>
      <Button success rounded outline onClick={handleClick}>
        <GoBell />
        Success
      </Button>
      <Button danger outline>
        <GoCloudDownload />
        Danger
      </Button>
      <Button warning>Warning</Button>
      <Button primary rounded>
        Primary
      </Button>
      <Button secondary outline>
        Secondary
      </Button>
    </div>
  );
};

export default App;
