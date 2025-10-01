import { SectionIntro, Card, Grid, Button } from '@/components/ui'
import AssetCard from '@/components/AssetCard'
import { MOCK_ASSETS } from '@/lib/mock'

export default function FractionalPage(){
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Fractional Ownership)"
        points={[
          "Explainer a step: scegli asset → compra quote → trade → governance",
          "Progress bar e governance menzionabili",
          "CTA 'Buy Shares' che porta al dettaglio asset"
        ]}
      />
      <Card title="Featured Fractionals">
        <Grid>
          {MOCK_ASSETS.map(a => <AssetCard key={a.slug} asset={a}/>)}
        </Grid>
      </Card>
    </div>
  )
}
