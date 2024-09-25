import env from 'dotenv'
import envar from 'env-var'

env.config();

 export const envs = {
    PORT: envar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}
