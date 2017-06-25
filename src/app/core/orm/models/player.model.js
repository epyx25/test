export default (sequelize, DataTypes) => {
  console.log('whats up playa?')
  let Player = sequelize.define('Player', {
    first_name: DataTypes.STRING
  });

  return Player;
};