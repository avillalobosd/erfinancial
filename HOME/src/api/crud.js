/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const API_URL = 'https://apierf.abecode.com/ERapi';
// const API_URL = 'http://localhost:4000/ERapi';

export default {

    // // MUESTRA TODOS LOS REGISTRO 
    mostrar: function () {
        return axios.get(API_URL + "/muestraActivos")
    },
    // // BUSCA SI HAY UN TELEFONO REGISTRADO
    // buscarTelefono: function (id) {
    //     return axios.get(API_URL + "/TelefonoOne/" + id);

    // },
    // buscarClave: function (id) {
    //     return axios.get(API_URL + "/ClaveOne/" + id);

    // },
    // buscarPass: function (id) {
    //     return axios.get(API_URL + "/ClavePass/" + id);

    // },
    cambiarStatus: function (id) {
        return axios.get(API_URL + "/status/" + id);

    },

    registrar: function (datos) {
        return axios.put(API_URL + "/registrar", datos)
    },
    editarPost: function (datos) {
        return axios.put(API_URL + "/editarPost", datos)
    },
    // subirFoto: function (datos) {
    //     return axios.put(API_URL + "/foto", datos,{
    //         headers: {
    //           'Content-Type': 'multipart/form-data'
    //         }
    //       });
    // },
    // // ACTUALIZA INDICANDO QUE YA CUENTA CON HIJOS 
    // hijos: function (id) {
    //     return axios.get(API_URL + "/hijos/" + id);

    // },
    // // REGRESA LOS HIJOS E HIJOS DE LOS HIJOS
    // muestraHijos: function (id) {
    //     return axios.get(API_URL + "/muestraHijos/" + id);

    // },
    // sumar: function (id) {
    //     return axios.get(API_URL + "/suma/" + id);

    // //REGRESA SOLO LOS REFERIDOS DIRECTOS
    // },sumarTodos: function (datos) {
    //     return axios.put(API_URL + "/sumarTodos", datos)
    
    // //REGRESA SOLO LOS REFERIDOS DIRECTOS
    // },referidos: function (id) {
    //     return axios.get(API_URL + "/referidos/" + id);

    // }
};
