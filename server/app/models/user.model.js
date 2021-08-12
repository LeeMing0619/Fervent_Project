module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      firstname: {
        type: DataTypes.STRING,
        unique: false
      },
      lastname: {
        type: DataTypes.STRING,
        unique: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      is_believer: {
        type: DataTypes.STRING,
        defaultValue: 0        
      },
      location: {
        type: DataTypes.STRING
      }
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  );

  return User;
};
