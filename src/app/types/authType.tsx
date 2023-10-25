export interface IRegisterType {
    email: string,
    password: string,
    fullname: string
}
export interface ILoginType extends Omit<IRegisterType, 'fullname'> { }