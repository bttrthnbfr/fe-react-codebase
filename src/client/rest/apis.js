import axios from 'axios';
import { createAxiosRequest } from './request';

// eslint-disable-next-line import/prefer-default-export
export const getUser = async () => createAxiosRequest(axios({
  method: 'GET',
  url: 'http://localhost:4000/user',
}));

export const createUser = async (email) => createAxiosRequest(axios({
  method: 'POST',
  url: 'http://localhost:4000/user',
  data: {
    email,
  },
}));
