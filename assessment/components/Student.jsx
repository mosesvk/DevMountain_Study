import { useState } from 'react';
import { BsPlusLg } from 'react-icons/Bs';
import { FcMinus } from 'react-icons/Fc';

const Student = ({ item }) => {
  const [isCardView, setIsCardView] = useState(true);

  const array = item.grades.map((item) => Number(item))

  const average = array.reduce((a, b) => a + b) / array.length;

  return (
    <div class='flex py-2 border-bottom'>
      <div class='m-5'>
        <div class='rounded-full border-2'>
          <img src={item.pic} class='w-24 rounded-full' />
        </div>
      </div>
      <div class='w-4/6 ml-5'>
        <h1 class='text-3xl font-bold uppercase mb-2'>
          {item.firstName} {item.lastName}
        </h1>
        <div class='ml-5 text-slate-400'>
          <p>Email: {item.email}</p>
          <p>Company: {item.company}</p>
          <p>Skill: {item.skill}</p>
          <p>Average: {average}%</p>
          <div class='mt-3'>
            {!isCardView &&
              item.grades.map((grade, idx) => (
                <p key={idx}>
                  Test {idx + 1}: {grade}%
                </p>
              ))}
          </div>
        </div>
      </div>
      <button
        key='tableModeButton'
        onClick={() => {
          setIsCardView(!isCardView);
        }}
        class='m-4 flex text-slate-400 text-2xl font-extrabold'
      >
        {isCardView ? <BsPlusLg class=' ' /> : <FcMinus class='' />}
      </button>
    </div>
  );
};

export default Student;
