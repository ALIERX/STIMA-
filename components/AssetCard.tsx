'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Tag } from './ui'
import type { Asset } from '@/lib/mock'

export default function AssetCard({asset}:{asset:Asset}){
  return (
    <Link href={`/assets/${asset.slug}`} className="card overflow-hidden block group">
      <div className="relative aspect-square">
        <Image src={asset.images[0]?.url || '/mock/placeholder.jpg'} alt={asset.name} fill className="object-cover transition-transform group-hover:scale-105" />
        <div className="absolute top-2 left-2"><Tag>{asset.rarity||'COMMON'}</Tag></div>
      </div>
      <div className="p-4 space-y-1">
        <div className="text-sm text-white/70">{asset.brand}</div>
        <div className="font-semibold text-lg">{asset.name}</div>
        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-bold">€{asset.current_value.toLocaleString('it-IT')}</div>
          <div className={(asset.current_value - asset.initial_value)>=0?'text-success':'text-danger'}>
            {asset.current_value - asset.initial_value >= 0 ? '+' : ''}
            {(((asset.current_value - asset.initial_value)/asset.initial_value)*100).toFixed(1)}%
          </div>
        </div>
      </div>
    </Link>
  )
}
