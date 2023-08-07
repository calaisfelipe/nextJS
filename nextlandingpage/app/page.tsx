'use client'
import {Button} from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 ">
      hello world

      <Button onClick={() => console.log('clicou')}>Teste</Button>


    </main>
  )
}
