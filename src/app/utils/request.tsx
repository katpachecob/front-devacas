import moment from 'moment';
import { IRequestProps, THeader } from '../types/requestType';
import { Agent } from 'https'

const request: IRequestProps = async (endpoint, options, module, params) => {

  try {
    const newAgent = new Agent({
      rejectUnauthorized: false
    })
    const base_url: string | undefined = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = localStorage.getItem('devacas-token');
    const url =
      `${base_url}/api/v1/${module}/` + endpoint + (params || '');
    let headers: THeader = {
      'Content-Type': 'application/json'
    };



    const config = {
      ...options,
      headers: headers,
      agent: newAgent,
      origin: "*"
    };

    const res = await fetch(url, config);

    if (res.status === 401) {
      window.location.href = '/auth/login';
    }

    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default request;
