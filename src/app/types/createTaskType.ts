export interface CreateTaskType {
    title:string,
    description?: string,
    status?:boolean
}
export interface CreateNewTaskType extends Omit<CreateTaskType,'status'> {
  
}

export interface SmartForm{
    country:string,
    date:string
}

export interface EditTaskType extends Partial<CreateTaskType>{}