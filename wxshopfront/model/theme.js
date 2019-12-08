import {config} from "../pages/config/config";
import {Http} from "../utils/http";
import {Promisic} from "../utils/util";

class Theme{
    static async getHomeLocationA() {
      return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            }
        })
    }
}

export {
    Theme
}