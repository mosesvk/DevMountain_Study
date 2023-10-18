import { apiCallToGetAvailableCourses } from './utilities/api';

async function fetchDataAndUseIt() {
  const coursesData = await apiCallToGetAvailableCourses();
  console.log(coursesData); // Use the data as needed
}

fetchDataAndUseIt(); // Call the function
