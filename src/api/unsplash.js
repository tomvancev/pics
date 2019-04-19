import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID be27c8b1f2cd3d18017744d053015bde27460ed5070e129993ded10d37f1c0ee'
   }
});
