import React from 'react';
import { Button } from '../../components/Button';
import { User, Mail } from 'lucide-react';

const ColorSwatch = ({ name, className, hexValue }: { name: string; className: string; hexValue: string }) => (
  <div className="mb-4 flex items-center">
    <div className={`mr-4 h-16 w-16 rounded border border-border ${className}`}></div>
    <div>
      <p className="font-mono text-sm text-foreground-medium">{className}</p>
      <p className="text-lg font-semibold text-foreground-strong">{name}</p>
      <p className="text-xs text-foreground-muted">{hexValue}</p>
    </div>
  </div>
);

export default function ComponentsPage() {
  const colors = [
    { name: 'Primary', className: 'bg-primary', hex: '#259EE5' },
    { name: 'Primary Dark', className: 'bg-primary-dark', hex: '#0C004B' },
    { name: 'Primary Darker', className: 'bg-primary-darker', hex: '#080033' },
    { name: 'Secondary', className: 'bg-secondary', hex: '#EE664A' },
    { name: 'Accent', className: 'bg-accent', hex: '#00CCA8' },
    { name: 'Foreground Strong', className: 'bg-foreground-strong', hex: '#101924' },
    { name: 'Foreground', className: 'bg-foreground', hex: '#273547' },
    { name: 'Foreground Medium', className: 'bg-foreground-medium', hex: '#303F63' },
    { name: 'Foreground Muted', className: 'bg-foreground-muted', hex: '#5A6D81' },
    { name: 'Border Strong', className: 'bg-border-strong', hex: '#768A9D' },
    { name: 'Border', className: 'bg-border', hex: '#92A1B1' },
    { name: 'Input', className: 'bg-input', hex: '#AEBAC7' },
    { name: 'Background Muted', className: 'bg-background-muted', hex: '#C8D1DB' },
    { name: 'Background', className: 'bg-background', hex: '#E3E8EF' },
    { name: 'Background Alt', className: 'bg-background-alt', hex: '#F2F5F9' },
    { name: 'Card', className: 'bg-card', hex: '#ffffff' },
  ];

  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold text-primary-dark">Component Showcase</h1>
      
      <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary-dark">Color Palette</h2>
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        {colors.map((color) => (
          <ColorSwatch 
            key={color.className} 
            name={color.name} 
            className={color.className}
            hexValue={color.hex} 
          />
        ))}
      </div>

      <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary-dark">Text Color Examples</h2>
      <p className="text-foreground-strong mb-2">Foreground Strong Text</p>
      <p className="text-foreground mb-2">Foreground Text</p>
      <p className="text-foreground-medium mb-2">Foreground Medium Text</p>
      <p className="text-foreground-muted mb-2">Foreground Muted Text</p>
      <p className="text-primary mb-2">Primary Text</p>
      <p className="text-secondary mb-2">Secondary Text</p>
      <p className="text-accent mb-2">Accent Text</p>

      <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary-dark">Border Color Examples</h2>
      <div className="mb-2 h-10 rounded border-2 border-border bg-card">Border</div>
      <div className="mb-2 h-10 rounded border-2 border-border-strong bg-card">Border Strong</div>
      <div className="mb-2 h-10 rounded border-2 border-primary bg-card">Border Primary</div>

      <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary-dark">Opacity Example</h2>
       <div className="relative h-20 w-full">
        <div className="absolute inset-0 bg-secondary"></div>
        <div className="absolute inset-4 bg-primary/50 flex items-center justify-center text-white font-bold text-xl">
            Primary with 50% opacity over Secondary
        </div>
       </div>

      <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary-dark">Buttons</h2>
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-foreground-medium">Default Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="large">Large Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="small">Small Button</Button>
          <Button size="large" iconLeft={<User />}>Large w/ Icon</Button>
          <Button iconLeft={<User />} iconRight={<Mail />}>Medium Icons</Button>
        </div>
        <h3 className="text-lg font-medium text-foreground-medium">Ghost Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="ghost" size="large">Large Ghost</Button>
          <Button variant="ghost" size="medium">Medium Ghost</Button>
          <Button variant="ghost" size="small">Small Ghost</Button>
          <Button variant="ghost" size="small" iconRight={<User />}>Small Ghost Icon</Button>
        </div>
      </div>
    </main>
  );
} 