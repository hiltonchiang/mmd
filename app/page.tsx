import { ClientOnly } from "./client"
const basePath = process.env.BASE_PATH || ''
console.log("basePath = ", basePath)
export default async function Page() {
    return <ClientOnly basePath={basePath}/>
}
