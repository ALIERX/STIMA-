'use client'
import { useState } from 'react'
import { SectionIntro, Card, Button } from '@/components/ui'
import { simulateMint } from '@/lib/mock'

export default function MintPage(){
  const [amount, setAmount] = useState(5000)
  const [hash, setHash] = useState<string | null>(null)
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Mint)"
        points={[
          "Scelta modalità (digital 70% LTV vs physical 100% – raccontalo)",
          "Fee, gas (mock), NFT receipt dinamico menzionabile",
          "Success modal con tx-hash simulato"
        ]}
      />
      <Card title="Tokenize Your Asset">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-white/70 mb-1">Amount to Mint (STIMA)</label>
            <input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value)||0)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
            <div className="text-white/60 mt-2">Max mintable: 8.960 STIMA (mock)</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between"><span>Platform Fee (1%)</span><b>€ 50</b></div>
            <div className="flex justify-between"><span>Gas (Polygon)</span><b>~$0.02</b></div>
            <div className="border-t border-white/10 pt-2 flex justify-between text-lg"><span>You Receive</span><b>{amount} STIMA</b></div>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <Button onClick={()=> setHash(simulateMint('rolex-submariner-126610', amount).txHash)}>Mint Tokens</Button>
          <Button variant="outline">Annulla</Button>
        </div>
        {hash && <div className="mt-4 p-3 rounded-xl bg-white/5">✅ Mint success — txHash: <code className="text-xs break-all">{hash}</code></div>}
      </Card>
    </div>
  )
}
