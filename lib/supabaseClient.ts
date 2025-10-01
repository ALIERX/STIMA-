'use client'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.local',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key'
)
