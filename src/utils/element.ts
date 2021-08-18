import { 
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElIcon,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElScrollbar,
  ElUpload,
  ElCollapseTransition,
} from 'element-plus'

// eslint-disable-next-line
const element = (app: any):void =>{
  app.use(ElButton)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElMain)
  app.use(ElFooter)
  app.use(ElIcon)
  app.use(ElCard)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.use(ElScrollbar)
  app.use(ElUpload)
  app.use(ElCollapseTransition)
}
export default element