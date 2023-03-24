import axios from 'axios';

//base do api https://api.themoviedb.org/3/
//URL da api  https://api.themoviedb.org/3/movie/now_playing?api_key=8cde68677701a0a9d85be28cd0c12176&language=PT-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;