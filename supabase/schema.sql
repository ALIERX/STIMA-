-- Minimal schema per demo
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  wallet text unique,
  email text unique,
  username text unique,
  tier text default 'FREE',
  created_at timestamp default now()
);

create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  name text not null,
  category text not null,
  brand text,
  model text,
  year int,
  current_value numeric,
  initial_value numeric,
  currency text default 'EUR',
  rarity text,
  condition int,
  description text,
  images jsonb default '[]'::jsonb,
  ml_forecast jsonb,
  created_at timestamp default now()
);

create table if not exists public.price_points (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid references public.assets(id) on delete cascade,
  ts timestamp not null,
  price numeric not null
);

create table if not exists public.portfolio (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  asset_id uuid references public.assets(id) on delete cascade,
  acquired_at timestamp default now(),
  acquired_price numeric,
  quantity numeric default 1
);
