import { ILoginType, IRegisterType } from "@/app/types/authType"
import request from "@/app/utils/request"

export async function loginUser(form: ILoginType) {
    try {
        const res = await request('login', { method: 'POST', body: JSON.stringify(form), mode: 'cors' }, 'auth')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }
    catch (err) {
        throw new Error('error fetching data')
    }
}


export async function registerUser(form: IRegisterType) {
    try {
        const res = await request('register', { method: 'POST', body: JSON.stringify(form), mode: 'cors' }, 'auth')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }
    catch (err) {
        throw new Error('error fetching data')
    }
}