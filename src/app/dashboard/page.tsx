import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import { db } from "../db"
import Dashboard from "@/components/Dasboard"
import { title } from "process"

const Page = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

    const dbUser = await db.user.findFirst({
        where: {
            id: user.id
        },
        include: {
            forms: true
        }
    })

    if (!dbUser) redirect('/auth-callback?origin=dashboard')

    return (
        <div>
            <Dashboard />
        </div>
    )
}
export default Page