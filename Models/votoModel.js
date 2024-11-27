import { DataTypes, Model } from "sequelize";

class VotoModel extends Model {}

VotoModel.init(
  {
    zona: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    candidato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export default VotoModel;
