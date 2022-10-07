import Image from 'next/future/image'
import Link from 'next/dist/client/link'



export default function Header() {
  return (
    <header>
        <div className="contenedor">
            <Image src="/img/logo.svg" width={300} height={40} alt="imagen logo" />
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/tienda">Tienda</Link>
                <Link href="/blog">Blog</Link>

            </nav>
        
        </div>

    </header>
  )
}
