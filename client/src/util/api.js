import axios from 'axios'

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = 'AIzaSyC18K0K74Mq0XD7WQ4inBoIpHEzVaEL_Ww'

export default {
  search: input => axios.get(`${URL}${input}&key=${KEY}`)
}