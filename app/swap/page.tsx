'use client'
import { useState } from 'react'
import { SectionIntro, Card, Button } from '@/components/ui'

export default function SwapPage(){
  const [from, setFrom] = useState(1000)
  const rate = 0.92 // mock STIMA->USDC
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Swap)"
        points={[
          "0x aggregator menzionabile - qui simuliamo il quote",
          "Slippage e fee mock ma realistici",
          "Route visualization raccontabile a voce"
        ]}
      />
      <Card title="Swap">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-white/70 mb-1">From (STIMA)</label>
            <input type="number" value={from} onChange={e=>setFrom(Number(e.target.value)||0)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
            <div className="text-white/60 mt-2">Balance: 6.100 STIMA (mock)</div>
          </div>
          <div>
            <div className="text-sm text-white/70 mb-1">To (USDC)</div>
            <div className="text-3xl font-bold">~ {(from*rate).toFixed(2)} USDC</div>
            <div className="text-white/60 mt-2">Rate 1 STIMA = {rate} USDC • Slippage 0.5% • Fee 0.5%</div>
          </div>
        </div>
        <div className="mt-4"><Button>Approve & Swap</Button></div>
      </Card>
    </div>
  )
}
