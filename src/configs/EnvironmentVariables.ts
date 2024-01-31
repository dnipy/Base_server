import { NodeEnvType } from "../types";

export var port = process.env.PORT || 3000;
export var NodeEnv = process.env.NODE_ENV as NodeEnvType || 'development' 
