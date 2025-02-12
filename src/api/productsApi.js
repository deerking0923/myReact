import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

const host = `${API_SERVER_HOST}/api/products`;

export const postAdd = async (product) => {
    // FormData를 사용할 때 헤더를 직접 지정하지 않습니다.
    const res = await axios.post(`${host}/`, product);
    return res.data;
};

export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const res = await axios.get(`${host}/list`, { params: { page, size } });
    return res.data;
};

export const getOne = async (tno) => {
    const res = await axios.get(`${host}/${tno}`);
    return res.data;
};

export const putOne = async (pno, product) => {
    // Content-Type 헤더를 제거하여 axios가 자동 설정하도록 함
    const res = await axios.put(`${host}/${pno}`, product);
    return res.data;
};
