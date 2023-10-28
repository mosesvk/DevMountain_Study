async function getAvailableCourses() {
  const url =
    'https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

getAvailableCourses()
