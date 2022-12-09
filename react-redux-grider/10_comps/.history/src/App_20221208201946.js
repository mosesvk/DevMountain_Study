import { GoBell, GoCloudDownload } from 'react-icons/go';
import Button from './components/Button';

const App = () => { 

  return (
    <div>
      <Button success rounded outline className='mb-5'>
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
