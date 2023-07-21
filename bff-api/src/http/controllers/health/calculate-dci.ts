import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function calculateDCI(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const querySchema = z.object({
    age: z.number(), // Idade deve ser um número
    weight: z.number(), // Peso deve ser um número
    height: z.number(), // Altura deve ser um número
    gender: z.enum(['male', 'female']), // Gênero deve ser 'male' ou 'female'
    activityLevel: z.enum([
      'sedentary',
      'lightly_active',
      'moderately_active',
      'very_active',
      'extra_active',
    ]),
  })

  try {
    const data = querySchema.parse(request.query)

    reply.send({
      success: true,
      data,
    })
  } catch (e) {
    reply.status(400).send({
      success: false,
      error:
        'Dados de entrada inválidos. Certifique-se de fornecer os campos corretos.',
    })
  }
}
