export interface INote {
  id: string
  content: string
  createdAt: string
  preview: string
  private: boolean
  secret: string
  edit: string
}

export interface IResponseApi {
  data: INote | any
  message: string
}