/**
 * Database Configuration Object
 */
const dbconfig = {
        HOST: "sh4ob67ph9l80v61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        USER: "zkow3y2mmmkck8t9",
        PASSWORD: "iyqvw6lnvdchncrx",
        DB: "ycbzn8awfbhn2k08",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
};
module.exports = dbconfig;
