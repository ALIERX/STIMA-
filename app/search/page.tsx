'use client'
import { useMemo, useState } from 'react'
import { SectionIntro, Card, Grid } from '@/components/ui'
import AssetCard from '@/components/AssetCard'
import { MOCK_ASSETS } from '@/lib/mock'

export default function SearchPage(){
  const [q,setQ] = useState('')
  const filtered = useMemo(()=>MOCK_ASSETS.filter(a => (a.name+a.brand+a.model).toLowerCase().includes(q.toLowerCase())),[q])
  return (
    <div className="space-y-6">
      <SectionIntro title="Come presentarla (Search & Discovery)"
        points={[
          "Ricerca istantanea (<100ms) simulata",
          "Filtri base (solo client-side)",
          "Compare e watchlist si possono raccontare verbalmente"
        ]}
      />
      <Card>
        <input placeholder="Cerca un asset..." value={q} onChange={e=>setQ(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none" />
      </Card>
      <Grid>
        {filtered.map(a => <AssetCard key={a.slug} asset={a}/>)}
      </Grid>
    </div>
  )
}
