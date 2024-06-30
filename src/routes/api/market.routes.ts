import { Router } from "express";
import { _prisma } from "@/src/configs/_Prisma";
import cheerio from "cheerio";
import { _controller } from "@/src/configs";


const router = Router();


router.get('/fear_greed_index',async(req,res)=>{
    _controller.get('/')
        .then((response)=>{
            const $ = cheerio.load(response.data);
            let FG_index = ''
            $('.sc-d1ede7e3-0').each((index, element) => {
                const F_G_I = $(element).text()
                if (F_G_I.endsWith('/100')){
                    if (F_G_I.length === 5 || F_G_I.length === 6 || F_G_I.length === 7){
                        FG_index = F_G_I;
                    }
                }
            })
            const trending_1 = {
                rank : $(`#__next > div.sc-a305e548-1.kMWJHX.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div > div.keen-slider > div:nth-child(1) > div > a:nth-child(2) > div > div:nth-child(1) > span.rank`)._root?.children(),
                symbol : $(`#__next > div.sc-a305e548-1.kMWJHX.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div > div.keen-slider > div:nth-child(1) > div > a:nth-child(2) > div > div:nth-child(1) > span.alias`),
            }
            console.log(trending_1)

            return res.json({data : FG_index})
        })
        .catch((e)=>{
            return res.json({err : 'error while connecting to Coin Market Cap',e})
        })
})

export default router;