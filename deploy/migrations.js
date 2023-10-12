import DbUtils from "../utils/dbUtils.js"
import * as dotenv from 'dotenv'
dotenv.config()

async function run(){
    const dbUtils = new DbUtils(
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        process.env.DB_HOST,
        process.env.DB_PORT,
        process.env.DB_SCHEMA
    )

    console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_PORT, process.env.DB_SCHEMA)

    await dbUtils.runLatestMigration()

    console.log('Migrations complete')

}

run()
