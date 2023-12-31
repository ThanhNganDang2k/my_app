import axios from "axios";
import { LoginPayload } from '@/models'
import axiosClient from "./axiosClient";

const categoryApi={
    getAll(params) {
        const url='auth/signin';
        return axiosClient.get(url,{params})
    },
    get(id){
        const url=`/categories/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url=`/categories`;
        return axiosClient.post(url,data);
    },
    update(data){
        const url=`/categories/${data.id}`;
        return axiosClient.patch(url,data);
    },
    get(id){
        const url=`/categories/${id}`;
        return axiosClient.delete(url);
    },
	
};
export default categoryApi;