// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  job: string
  company: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(new Date(), req)
  res.status(200).json({ name: 'John Doe', job: 'Github Action Notificator', company: 'Slack' })
}
