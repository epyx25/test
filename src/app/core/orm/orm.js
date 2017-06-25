import Connection from 'sequelize-connect'

export class ORM {
  /**
   * Starts sequelize, connects to the database,
   * loads models from the 'models' folder
   * @param {JSON} configuaration JSON
   * @return {Promise} 
   */
  constructor (conf) {
    let discover = __dirname + '/models'
    const { database } = conf
    return new Connection(
      database.name,
      database.user,
      database.password,
      {
        dialect: 'postgres',
        port:    database.port
      },
      discover, null, false
    )
  }
}