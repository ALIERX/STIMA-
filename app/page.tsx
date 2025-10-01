import { SectionIntro, Card, Grid, Stat, Button } from '@/components/ui'
import AssetCard from '@/components/AssetCard'
import { MOCK_ASSETS } from '@/lib/mock'

export default function HomePage(){
  return (
    <div className="space-y-8">
      <SectionIntro title="Come presentarla (Homepage)"
        points={[
          "Hero con claim sintetico: 'Bloomberg + DeFi per Asset di Lusso'",
          "KPI finti che si muovono leggermente per dare live-feel",
          "Carosello asset in evidenza, call-to-action: 'Start Tokenizing'"
        ]}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Total Vault NAV" value="€ 4,3B" trend={2.3}/>
        <Stat label="Active Users" value="127K" trend={0.4}/>
        <Stat label="24h Volume" value="€ 12,4M" trend={1.2}/>
        <Stat label="STIMA Supply" value="245M" />
      </div>
      <Card title="Featured Assets" subtitle="Demo con dati mock">
        <Grid>
          {MOCK_ASSETS.map(a => (<AssetCard key={a.slug} asset={a}/>))}
        </Grid>
      </Card>
      <div className="flex gap-3">
        <Button>Start Tokenizing</Button>
        <Button variant="outline">Guarda il Portfolio Demo</Button>
      </div>
    </div>
  )
}
