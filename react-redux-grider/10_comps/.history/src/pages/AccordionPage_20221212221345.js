import Accordion from './components/Accordion';
import ButtonPage from './pages/ButtonPage';

function AccordionPage () {
  const items = [
    {
      id: 'ksadfjas',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: 'asdfjkasfj',
      label: 'Can I use JavaScript no a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: 'saldjfks',
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    }
  ];

  return (
    <>
      <Accordion items={items} />
      <ButtonPage />
    </>
  );
}

export default AccordionPage;
