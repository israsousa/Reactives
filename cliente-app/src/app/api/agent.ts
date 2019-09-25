import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../model/activity';


axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response),ms));

const resquests =  {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body:{}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)
}

const Activities = {
    list: (): Promise<IActivity[]> => resquests.get('/activities'),
    details: (id:string) => resquests.get(`/activities/${id}`),
    create: (activity: IActivity) => resquests.post('/activities/', activity),
    update: (activity: IActivity) => resquests.put(`/activities/${activity.id}`, activity),    
    delete: (id:string) => resquests.del(`/activities/${id}`)

}

export default {
    Activities
}