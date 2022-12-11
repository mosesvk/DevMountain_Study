import Accordion from './components/Accordion';
import ButtonPage from './pages/ButtonPage';

function App() {
  const items = [
    {
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      label: 'Can I use JavaScript no a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    }
  ];


  return (
    <>
      <Accordion items={items}/>
      <ButtonPage />
    </>
  );
}

export default App;
