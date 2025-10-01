import { NextResponse } from 'next/server'
import { MOCK_ASSETS } from '@/lib/mock'
export function GET(){ return NextResponse.json(MOCK_ASSETS) }
