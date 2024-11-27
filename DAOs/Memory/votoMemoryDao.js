class votoMemoryDao {
  constructor() {
    this.votos = [];
  }
  createDao = async (data) => {
    try {
      this.votos.push(data);
      return data;
    } catch (error) {
      return error;
    }
  };
  getGeneralesDao = async () => {
    try {  
      return this.votos;
    } catch (error) {
      return error;
    }
  };

}

export default votoMemoryDao;
