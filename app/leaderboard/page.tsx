import { SectionIntro, Card, Button } from '@/components/ui'

const TRADERS = [
  {name:'RolexKing', roi:43, followers:3120},
  {name:'VintageGuru', roi:28, followers:1840},
  {name:'ArtWhale', roi:64, followers:980},
]

export default function LeaderboardPage(){
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Leaderboard & Copy)"
        points={[
          "Classifica con ROI e followers (mock)",
          "CTA 'Copy Trader' che apre modal (qui semplificato)",
          "Performance fee spiegabile"
        ]}
      />
      <Card title="Top Traders">
        <div className="divide-y divide-white/10">
          {TRADERS.map(t => (
            <div key={t.name} className="py-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-white/70 text-sm">{t.followers} followers</div>
              </div>
              <div className="text-success font-bold">ROI {t.roi}%</div>
              <Button>Copy Trader</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
