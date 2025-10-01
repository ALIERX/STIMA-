import { SectionIntro, Card, Grid, Stat, Button } from '@/components/ui'
import AssetCard from '@/components/AssetCard'
import { MOCK_ASSETS } from '@/lib/mock'

export default function PortfolioPage(){
  const total = MOCK_ASSETS.reduce((s,a)=>s+a.current_value,0)
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Portfolio)"
        points={[
          "KPI + grafico (qui semplificato)",
          "Tabella asset con P&L e azioni rapide",
          "Sezione Copy-Trading (link a Leaderboard)"
        ]}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Total Value" value={`€ ${total.toLocaleString('it-IT')}`} trend={1.1} />
        <Stat label="P&L" value="+ € 7.400" trend={6.2} />
        <Stat label="Staked Value" value="€ 12.000" />
        <Stat label="Liquid Tokens" value="6.100 STIMA" />
      </div>
      <Card title="I tuoi asset">
        <Grid>
          {MOCK_ASSETS.map(a => <AssetCard key={a.slug} asset={a}/>)}
        </Grid>
        <div className="mt-4"><Button variant="outline">Esporta Report</Button></div>
      </Card>
    </div>
  )
}
