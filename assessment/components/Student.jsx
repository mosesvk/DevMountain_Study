import { useState } from 'react';
import { BsPlusLg } from 'react-icons/Bs';
import { FcMinus } from 'react-icons/Fc';

const Student = ({ item, array }) => {
  const [isCardView, setIsCardView] = useState(true);
  const [inputTag, setInputTag] = useState('');
  const [tags, setTags] = useState([]);

  const arrayNum = item.grades.map((item) => Number(item));

  const average = arrayNum.reduce((a, b) => a + b) / arrayNum.length;

  const handleChange = (e) => {
    setInputTag(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tags.push(inputTag);
    item.tagNames.push(inputTag)
    setInputTag('');
  };

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
            {!isCardView && (
              <>
                {item.grades.map((grade, idx) => (
                  <p key={idx}>
                    Test {idx + 1}: {grade}%
                  </p>
                ))}
                <div class='flex'>
                  {tags?.map((tag, idx) => {
                    return (
                      <p
                        key={idx}
                        class='bg-gray-400 rounded-lg p-2 mx-1 w-fit text-black'
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    value={inputTag}
                    placeholder='Add a Tag'
                    class='m-2 p-2 border-b-2 hover:border-gray-400 focus:border-gray-400 disabled:opacity-75'
                    onChange={handleChange}
                  />
                </form>
              </>
            )}
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
