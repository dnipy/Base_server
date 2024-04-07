import * as redis from 'redis'

const redisClient = redis.createClient()

redisClient.connect()
    .then(()=>console.log('redis is ready'))
    .catch(()=>console.log('connection to redis failure'))

// Handle errors
redisClient.on('error', err => {
    console.error('Redis error:', err);
});

const RedisSetItem = async(key:string, value : string, expire?: number) =>{
    return expire
        ?
        await redisClient.setEx(key,expire,value)
        :
        await redisClient.set(key,value)
}

const RedisGetItem = async(key : string)=>{
    const data = await redisClient.get(key)
        .then(res=>{
            return res
        })
        .catch(err=>{
            console.log(err)
            return null
        })
    return data
        
}

export {
    RedisGetItem,
    RedisSetItem,
    redisClient
}