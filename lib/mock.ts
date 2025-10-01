export type Asset = {
  slug: string
  name: string
  category: string
  brand?: string
  model?: string
  year?: number
  current_value: number
  initial_value: number
  rarity?: string
  condition?: number
  description?: string
  images: {url:string,isPrimary?:boolean}[]
  ml_forecast?: any
}

export const MOCK_ASSETS: Asset[] = [
  {
    slug:'rolex-submariner-126610',
    name:'Rolex Submariner 126610',
    category:'WATCHES',
    brand:'Rolex',
    model:'Submariner',
    year:2021,
    current_value:12500,
    initial_value:11000,
    rarity:'RARE',
    condition:9,
    description:'Iconico diver in acciaio.',
    images:[{url:'/mock/watches/submariner.jpg', isPrimary:true}],
    ml_forecast:{fairValue:12800,d30:0.02}
  },
  {
    slug:'patek-5711',
    name:'Patek Philippe Nautilus 5711',
    category:'WATCHES',
    brand:'Patek Philippe',
    model:'Nautilus 5711',
    year:2019,
    current_value:98000,
    initial_value:120000,
    rarity:'LEGENDARY',
    condition:8,
    description:'Il re del casual-chic.',
    images:[{url:'/mock/watches/nautilus.jpg', isPrimary:true}],
    ml_forecast:{fairValue:100000,d30:-0.01}
  }
]

// Simulazione "blockchain"
let ledger:string[] = []
export function simulateMint(assetSlug:string, amount:number){
  const tx = `MINT:${assetSlug}:${amount}:${Date.now()}`
  ledger.push(tx)
  return { txHash: Buffer.from(tx).toString('base64') }
}
export function getLedger(){ return ledger.slice(-20) }
