import { Card } from '@/components/ui'

export default function Guida(){
  return (
    <div className="space-y-6">
      <Card title="Guida di presentazione (Pitch)">
        <ol className="list-decimal pl-5 space-y-1 text-white/80">
          <li>Homepage → KPI + asset in evidenza</li>
          <li>Search → istantaneità e filtri</li>
          <li>Asset Detail → Fractional + Predictions</li>
          <li>Appraise → wizard AI (mock)</li>
          <li>Mint → LTV + tx-hash</li>
          <li>Portfolio → KPI + report</li>
          <li>Swap → instant liquidity (mock)</li>
          <li>Leaderboard/Copy → social trading</li>
        </ol>
      </Card>
    </div>
  )
}
