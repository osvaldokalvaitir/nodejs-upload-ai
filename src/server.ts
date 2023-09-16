import { fastify } from "fastify"
import { prisma } from "./lib/prisma"

const app = fastify()

app.get('/prompts', async () => {
  const prompts = await prisma.prompt.findMany()

  return prompts
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!')
})