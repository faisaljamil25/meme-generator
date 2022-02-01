import axios from 'axios';

const URL = 'https://api.imgflip.com/get_memes';

export const getMemes = async () => await axios.get(URL);
