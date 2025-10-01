import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MOCK_ASSETS } from '@/lib/mock'
import { Card, Button, SectionIntro } from '@/components/ui'

export default function AssetDetail({ params }:{ params:{ slug:string } }){
  const asset = MOCK_ASSETS.find(a => a.slug===params.slug)
  if(!asset) return notFound()
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Asset Detail)"
        points={[
          "Header con prezzo live (mock) e % change",
          "Tabs: Overview, Price, Fractional, Predictions, Community (semplificato)",
          "Pulsanti rapidi: Appraise, Alert, Share"
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src={asset.images[0]?.url || '/mock/placeholder.jpg'} alt={asset.name} fill className="object-cover"/>
          </div>
        </Card>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{asset.name}</h1>
          <div className="text-white/70">{asset.brand} • {asset.model} • {asset.year}</div>
          <div className="text-4xl font-extrabold">€ {asset.current_value.toLocaleString('it-IT')}</div>
          <p className="text-white/80">{asset.description}</p>
          <div className="flex gap-3">
            <Button>📸 Appraise Yours</Button>
            <Button variant="outline">+ Watchlist</Button>
          </div>
        </div>
      </div>
      <Card title="Fractional (simulato)" subtitle="Acquista quote">
        <div className="flex items-center gap-6">
          <div>Totale quote: <b>1.000</b></div>
          <div>Disponibili: <b>420</b></div>
          <div>Prezzo/quota: <b>€ {(asset.current_value/1000).toFixed(2)}</b></div>
          <Button className="ml-auto">Compra quote</Button>
        </div>
      </Card>
      <Card title="Prediction Market (simulato)">
        <div className="flex items-center gap-6">
          <div className="text-white/80">Il prezzo supererà il {(asset.current_value*1.1).toFixed(0)}€ tra 30 giorni?</div>
          <Button>Buy YES</Button>
          <Button variant="outline">Buy NO</Button>
        </div>
      </Card>
    </div>
  )
}
