import { NextResponse } from 'next/server'
export async function POST(request:Request){
  const body = await request.json()
  const tx = Buffer.from(`MINT:${body.asset}:${body.amount}:${Date.now()}`).toString('base64')
  return NextResponse.json({ ok:true, txHash: tx })
}
