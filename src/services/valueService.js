import axios from 'axios';

const baseUrl = 'https://levelwatertank.herokuapp.com/values/array';

export default class valueService {
  /**
   * renvoie un tableau des valeur de un capteur
   * @returns {Promise<AxiosResponse<any>>}
   */
  static async getAllValuesByCapteur(capteur) {
    const response = await axios.get(baseUrl, {
      params: {
        idCapteur: capteur,
      },
    });

    return response.data;
  }
}
