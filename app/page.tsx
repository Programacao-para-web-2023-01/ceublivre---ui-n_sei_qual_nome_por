import Image from 'next/image'
import Pedidos from './components/pedidos'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pedidos />
    </main>
  )
}
