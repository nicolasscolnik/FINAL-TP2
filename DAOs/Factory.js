import votoMemoryDao from "./Memory/votoMemoryDao.js"


class Factory {
  constructor() { }

  static factory = (MODE) => {
    if (MODE === "memory") {
      return {
        votoDao: new votoMemoryDao(),
      };
    }
  };
}

export default Factory;
