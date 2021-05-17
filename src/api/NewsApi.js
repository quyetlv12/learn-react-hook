import { axiosClient } from "./axiosClient"

const NewsAPI= {
    getAllNews(){
        const url = `https://headphoneapi.herokuapp.com/api/news`
        return axiosClient.get(url)
    }
}

export default NewsAPI