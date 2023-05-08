const pupt = require('puppeteer')

export async function startBrowser(){
    try{
        const browser = await pupt.launch({
            headless:false,
            'ignoreHTTPSErrors':true,
            args: [`--window-size=1920,1080`],
            defaultViewport: {
                width:1920,
                height:1080
            }
        })
        return browser
    }
    catch(err){
        console.error(err)
    }
}
