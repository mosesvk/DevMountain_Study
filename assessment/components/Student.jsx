const Student = ({ item }) => {
  return (
    <div class='flex py-2 border-bottom'>
      <div class='m-5'>
        <div class='rounded-full border-2'>
          <img src={item.pic} class='w-24 rounded-full' />
        </div>
      </div>
      <div class='w-2/3 ml-5'>
        <h1 class='text-3xl font-bold uppercase mb-2'>
          {item.firstName} {item.lastName}
        </h1>
        <div class='ml-5'>
          <p>Email: {item.email}</p>
          <p>Company: {item.company}</p>
          <p>Skill: {item.skill}</p>
          <p>Average</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
