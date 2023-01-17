import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
  console.log('Running NLW HABITS App...\n')
  return 'NLW HABITS'
})

app.listen({
  port: 3333,
})