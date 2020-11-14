import axios from 'axios'

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = process.env.BOOKS_API_KEY;

export default {
  search: input => axios.get(`${URL}${input}&key=${KEY}`),
  getAll: () => axios.get(`/api/books`),
  add: (book) => axios.post(`/api/books`, book),
  delete: id => axios.delete(`/api/books/${id}`)
}