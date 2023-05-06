const pupt = require('puppeteer')

export async function startBrowser(){
    try{
        const browser = await pupt.launch({
            'ignoreHTTPSErrors':true
        })
        return browser
    }
    catch(err){
        console.error(err)
    }
}
