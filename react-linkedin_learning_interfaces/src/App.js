import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import Search from './components/Search';

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('petName')
  const [orderBy, setOrderBy] = useState('asc')

  const filteredAppointments = appointmentList.filter((item) => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    );
  }).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() => {
    fetch(`./data.json`)
      .then((res) => res.json())
      .then((data) => setAppointmentList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className='container mx-auto mt-3 font-thin'>
        <h1 className='text-5xl mb-3'>
          {' '}
          <BiCalendar className='inline-block text-red-400' /> My App
        </h1>
        <AddAppointment />
        <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} sortBy={sortBy} onSortByChange={mySort => setSortBy(mySort)} orderBy={orderBy} onOrderByChange={myOrder => setOrderBy(myOrder)} />

        <ul className='divide-y divide-gray-200'>
          {filteredAppointments.map((appointment) => (
            <AppointmentInfo
              key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={(appointmentId) =>
                setAppointmentList(
                  appointmentList.filter(
                    (appointment) => appointment.id !== appointmentId
                  )
                )
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
