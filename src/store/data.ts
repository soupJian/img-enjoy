
export interface user {
  id: number | null,
  name: string | null
}
export interface stateType{
  showUpload: boolean,
  previewImage: string,
  user:user
}
