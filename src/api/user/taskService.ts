import { CardType } from "@/app/types/components/CardType"
import { CreateTaskType, EditTaskType, SmartForm } from "@/app/types/createTaskType"
import request from "@/app/utils/request"


export async function getTasks() {
    try {
        const res = await request('', { method: 'GET' }, 'tasks')
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }
    catch (err) {
        throw new Error('error fetching data')
    }
}

export async function createTask(createTask: CreateTaskType) {
    try {
        const res = await request('', { method: 'POST', body: JSON.stringify(createTask) }, 'tasks')
        if (!res.ok) {
            throw new Error('Failed to post data')
        }
        return res.json()
    }
    catch (err) {
        throw new Error('error posting data')
    }
}

export async function createSmartTask(createSmartTask: SmartForm) {
    try {
        const res = await request('search', { method: 'POST', body: JSON.stringify(createSmartTask) }, 'tasks')
        if (!res.ok) {
            throw new Error('Failed to post data')
        }
        let data = await res.json()
        let newTask = await createTask({ title: `No olvides llevar:${data[0].text}` })
        return newTask
    }
    catch (err) {
        throw new Error('error posting data')
    }
}
export async function editTask(editTask: EditTaskType, id: number) {
    try {
        const res = await request(`${id}`, { method: 'PATCH', body: JSON.stringify(editTask), mode: 'cors' }, 'tasks')
        return res
    }
    catch (err) {
        throw new Error('error posting data')
    }
}
