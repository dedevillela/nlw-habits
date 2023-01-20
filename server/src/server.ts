import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/*app.register(cors, {
  origin: ['http://localhost:5173']
})*/
app.register(cors)

app.get('/habits', async () => {
  /*const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Beber'
      }
    }
  })*/
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server listening on port 3333')
})