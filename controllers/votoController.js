import votoApi from "../Api/votoApi.js";

class votoController {
  constructor() {
    this.votoApi = new votoApi()
  }

  create = async (req, res) => {
    try {
      const info = await this.votoApi.create(req.body);
      res.status(200).send("Voto cargado");
    } catch (error) {
      console.log({ message: error.message })
      res.status(422).send({ message: error.message });
    }
  };
  getAll = async (req, res) => {
    try {
      const info = await this.votoApi.getAll();
      res.status(200).send(info);
    } catch (error) {
      console.log({ message: error.message })
      res.status(422).send({ message: error.message });
    }
  };


}

export default votoController;
