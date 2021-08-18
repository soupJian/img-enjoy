export interface registerData{
  code: number,
  message: string
}
export interface loginData{
  code: number,
  message: string,
  user: {
    id: number,
    name: string
  }
}
