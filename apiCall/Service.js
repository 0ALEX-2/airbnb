import axios from 'axios';

export async function getMainData() {
  try {
    const response = await axios.get('https://links.papareact.com/pyp');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return null;
  }
}