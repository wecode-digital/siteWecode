// pages/api/form-submit.ts
import type { NextApiRequest, NextApiResponse } from 'next'

const VTEX_ACCOUNT = 'wecode' 
const VTEX_ENV = 'myvtex' 
const DATA_ENTITY = 'FC'          
const VTEX_API_URL = `https://${VTEX_ACCOUNT}.${VTEX_ENV}.com/api/dataentities/${DATA_ENTITY}/documents`

const VTEX_APP_KEY = process.env.VTEX_APP_KEY!
const VTEX_APP_TOKEN = process.env.VTEX_APP_TOKEN!

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    console.log('Método não permitido')
    return res.status(405).json({ message: 'Método não permitido' })
  }

  console.log('Corpo da requisição:', req.body)

  try {
    const response = await fetch(VTEX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': VTEX_APP_KEY,
        'X-VTEX-API-AppToken': VTEX_APP_TOKEN,
      },
      body: JSON.stringify(req.body),
    })

    console.log('Resposta do servidor VTEX:', response)

    if (!response.ok) {
      const errorText = await response.text()
      console.log('Erro ao enviar para o Master Data:', errorText)
      return res.status(response.status).json({ message: 'Erro ao enviar para o Master Data', details: errorText })
    }

    const data = await response.json()
    console.log('Resposta de sucesso do VTEX:', data)
    return res.status(200).json({ message: 'Enviado com sucesso', data })

  } catch (error) {
    console.log('Erro no servidor:', error)
    return res.status(500).json({ message: 'Erro interno no servidor', error })
  }
}
