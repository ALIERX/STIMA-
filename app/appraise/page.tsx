'use client'
import { useState } from 'react'
import { SectionIntro, Card, Button } from '@/components/ui'

export default function AppraisePage(){
  const [step, setStep] = useState(1)
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Appraise)"
        points={[
          "Wizard 4 step: selezione asset, foto, condizione, risultato",
          "OCR/AI simulati con feedback finto (barra di progresso)",
          "Generazione PDF/NFT spiegabile a voce"
        ]}
      />
      <Card title={`Step ${step} di 4`}>
        {step===1 && <div className="space-y-3">
          <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Cerca modello (es. Submariner 126610)" />
          <Button onClick={()=>setStep(2)}>Continua →</Button>
        </div>}
        {step===2 && <div className="space-y-3">
          <div className="text-white/70">Carica 3-6 foto (mock)</div>
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6)].map((_,i)=>(<div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/10"/>))}
          </div>
          <Button onClick={()=>setStep(3)}>Analizza →</Button>
        </div>}
        {step===3 && <div className="space-y-3">
          <label className="block text-sm text-white/70 mb-1">Condizione (1-10)</label>
          <input type="range" min="1" max="10" defaultValue="8" className="w-full"/>
          <Button onClick={()=>setStep(4)}>Calcola Valore →</Button>
        </div>}
        {step===4 && <div className="space-y-3">
          <div className="text-3xl font-bold">€ 12.800</div>
          <div className="text-white/70">Confidence: 86%</div>
          <div className="grid grid-cols-2 gap-3">
            <Button>Scarica Valuation PDF</Button>
            <Button variant="outline">Tokenize & Mint</Button>
          </div>
        </div>}
      </Card>
    </div>
  )
}
