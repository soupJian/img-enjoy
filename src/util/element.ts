import { 
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElIcon
} from 'element-plus'

// eslint-disable-next-line
const element = (app: any):void =>{
  app.use(ElButton)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElIcon)
}
export default element