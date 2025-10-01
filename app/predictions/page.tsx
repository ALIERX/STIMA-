import { SectionIntro, Card, Button } from '@/components/ui'

export default function PredictionsPage(){
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Prediction Markets)"
        points={[
          "Mercati binari su asset specifici",
          "Creator bond e risoluzione via oracle (spiegabile)",
          "Payout 1€ per share → simulato"
        ]}
      />
      <Card title="Mercati attivi">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>Submariner > € 13.000 entro 30 giorni?</div>
            <div className="flex gap-2">
              <Button>Buy YES</Button>
              <Button variant="outline">Buy NO</Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>Nautilus 5711 > € 105.000 entro 60 giorni?</div>
            <div className="flex gap-2">
              <Button>Buy YES</Button>
              <Button variant="outline">Buy NO</Button>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Crea un mercato">
        <div className="grid md:grid-cols-3 gap-3">
          <input placeholder="Domanda" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
          <input placeholder="Data risoluzione" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"/>
          <Button>Crea</Button>
        </div>
      </Card>
    </div>
  )
}
