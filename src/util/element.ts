import App from './App.vue'
import { ElButton } from 'element-plus'

const element = (app: any) =>{
  app.use(ElButton)
}
export default element