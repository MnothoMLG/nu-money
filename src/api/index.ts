import axios from 'axios';
const graphqlEndpoint = '/graphql';

export const client = axios.create({
  //ToDo;  use dotenv
  baseURL: 'http://localhost:5000',
});
