const Student = ({ item }) => {
  return (
    <div class='flex mb-2 border-bottom'>
      <div class='w-1/3'>
        <div class='rounded-full border-black'>
          <img src={item.pic} />
        </div>
      </div>
      <div class='w-2/3'>
        <h1>
          {item.firstName} {item.lastName}
        </h1>
        <p>Email: {item.email}</p>
        <p>Company: {item.company}</p>
        <p>Skill: {item.skill}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Student;
