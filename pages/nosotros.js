import Link from "next/dist/client/link"
import Layout from "../components/layout"

export default function Nosotros() {
  return (
    <Layout
    title={'Nosotros'}
    description={'App en NextJS'}
    >
        <div>nosotros</div>
        <Link href="/" >Ir al inicio</Link>
    </Layout>
  )
}
