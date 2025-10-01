'use client'
import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export const Card: React.FC<React.PropsWithChildren<{className?:string,title?:string,subtitle?:string}>> = ({className, title, subtitle, children}) => (
  <div className={clsx('card p-5', className)}>
    {(title || subtitle) && (
      <div className="mb-4">
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
      </div>
    )}
    {children}
  </div>
)

export const Stat = ({label, value, trend}:{label:string, value:string|number, trend?:number}) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
    <div className="text-sm text-white/60">{label}</div>
    <div className="text-2xl font-bold">{value}</div>
    {typeof trend === 'number' && (
      <div className={trend>=0?'text-success':'text-danger'}>
        {trend>=0?'+':''}{trend}%
      </div>
    )}
  </div>
)

export const SectionIntro = ({title, points}:{title:string, points:string[]}) => (
  <Card title={title}>
    <ul className="list-disc pl-5 space-y-1 text-white/80">
      {points.map((p,i)=>(<li key={i}>{p}</li>))}
    </ul>
  </Card>
)

export const Button = ({children, variant='primary', className='', ...props}:{children:any, variant?:'primary'|'outline', className?:string} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={clsx(variant==='primary'?'btn-primary':'btn-outline', className)} {...props}>{children}</button>
)

export const Tag = ({children}:{children:any}) => (
  <span className="badge">{children}</span>
)

export const Grid = ({children}:{children:any}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{children}</div>
)
