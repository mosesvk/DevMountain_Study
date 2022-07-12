import { BiCalendar } from 'react-icons/bi';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import Search from './components/Search';
import appointments from './data.json';

function App() {

  return (
    <>
      <div className='container mx-auto mt-3 font-thin'>
        <h1 className='text-5xl mb-3'>
          {' '}
          <BiCalendar className='inline-block text-red-400' /> My App
        </h1>
        <AddAppointment />
        <Search />

        <ul className='divide-y divide-gray-200'>
          {appointments.map((appointment) => (
            <AppointmentInfo key={appointment.id} appointment={appointment} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
