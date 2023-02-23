import axios from 'axios';
const $https = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 6000,
  headers: {
    'content-type': 'application/json',
  },
});
export const TutorialDataService = (callBack: Function) => {
  console.log('first', $https);
  $https
    .get('https://fakestoreapi.com/products')
    .then((resp: any) => {
      console.log('resp', resp);
      callBack(resp.data);
    })
    .catch((err: any) => {
      console.log('---->', err);
    });
};
