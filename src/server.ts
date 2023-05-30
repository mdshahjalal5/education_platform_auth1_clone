import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function boostrap() {
  try {

    // ? await mongoose.connect(config.database_url as string)

    await mongoose.connect(
      'mongodb+srv://web2:8HdqwXJGb4ZKIcJ1@chkdbcluster.qsaqded.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log(`🛢   Database is connected successfully`)

    // app.listen(config.port, () => {
    app.listen(5000, () => {
      console.log(`Application  listening on port ${config.port} 5000`)
    })
  } catch (err) {
    console.log('Failed to connect database', err)
  }
}

boostrap()
