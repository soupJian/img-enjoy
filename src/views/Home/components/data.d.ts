export interface uploadReq{
  
}
export interface uploadRes{
  address: string[],
  message: string
}
export interface hotImage {
  id: number, // 上传者id
  time: number, // 上传时间
  url: string, // 图片地址
  proportion: string, // 图片比例
  description: string, // 图片描述
  num: number, // 被收藏数量
  moments: number // 评论
}
export interface hotImgRes{
  hotImage: hotImage[]
}