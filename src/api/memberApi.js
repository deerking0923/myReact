import axios from "axios"
import {API_SERVER_HOST} from "./todoApi"

const host = `${API_SERVER_HOST}/api/member`

export const loginPost = async (loginParam) => {
    const header = {headers: {"Content-type" : "x-ww-form-urlencoded"}}

    const form = new FormData()
    form.append('username', loginParam.email)
    form.append('password', loginParam.password)

    const res = await axios.post(`${host}/login`, form, header)

    return res.data
}