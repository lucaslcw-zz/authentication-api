import { app } from './app'
import { PORT } from './config'

const port: string|number = PORT || 3000

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
