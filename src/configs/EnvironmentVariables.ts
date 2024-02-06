import { base_dir } from "../_basedir";
import { NodeEnvType } from "../types";
import dotenv from "dotenv";

export async function NODE_ENV_CONFIG () {
    const NODE_ENV = process.env.NODE_ENV;
    dotenv.config({path : `${base_dir}/env/${NODE_ENV}/.env.${NODE_ENV}`})
    // console.log({NODE_ENV,port :  process.env.PORT , path : `${__dirname}/env/${NODE_ENV}/.env.${NODE_ENV}`})
}

export var port = process.env.PORT || 3000;
export var NodeEnv = process.env.NODE_ENV as NodeEnvType || 'development' 