import Factory from "../DAOs/Factory.js";
import { MODE } from "../config/config.js";

class votoApi {
  constructor() {
    this.factory = Factory.factory(MODE);
  }

  
  create = async (data) => {
    try {
      const info = await this.factory.votoDao.createDao(data);
      return info;
    } catch (error) {
      return error;
    }
  };

  getAll = async () => {
    try {
      const info = await this.factory.votoDao.getGeneralesDao();
      const conteoVotos = {
        candidatoA: 0,
        candidatoB: 0,
        candidatoC: 0,
        enblanco: 0,
      };
  
      info.forEach((voto) => {
        if (voto.candidato === 'A') {
          conteoVotos.candidatoA++;
        } else if (voto.candidato === 'B') {
          conteoVotos.candidatoB++;
        } else if (voto.candidato === 'C') {
          conteoVotos.candidatoC++;
        } else if (voto.candidato === 'ENBLANCO') {
          conteoVotos.enblanco++;
        }
      });

      const candidatoMaxVotos = Object.keys(conteoVotos).reduce((a, b) => conteoVotos[a] > conteoVotos[b] ? a : b);
  
      conteoVotos[candidatoMaxVotos] += conteoVotos.enblanco;
      delete conteoVotos.enblanco;
  
      return {
        generales: conteoVotos,
      };
    } catch (error) {
      console.log(error.message);
      return error;
    }
  };
  

}

export default votoApi;
