import {config} from "../config/config";
import {Promisic} from "./util";

class Http {
    //参数用花括号括起来，被调用的时候就可以以对象的形式赋值，类似于Http.request({...})
    static async request({url, data, method = 'GET'}) {
        const res = await Promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        })
        return res.data
    }
}

export {
    Http
}