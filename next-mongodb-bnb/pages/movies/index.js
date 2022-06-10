import clientPromise from '../../lib/mongodb'

const Movies = ({users}) => {

  return (
    <div className="container">
      <div>
        <a href='/' className='card'>
          Back
        </a>
      </div>
      <div>
        {users.map((user, index) => {
          return (
            <div className="card" key={index}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.mobile}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Movies

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("sample_mflix");

  let users = await db.collection("users").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}