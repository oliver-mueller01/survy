import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BookOpen, BookOpenCheck, Inbox } from "lucide-react"
import { Button } from "./ui/button"

const Dashboard = () => {
    return (
        <main className="mx-auto max-w-7xl md:p-10">
            <div className="mt-5 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-cemter sm:gap-0">
                <h1 className="mb-3 font-bold text-4xl text-gray-900">Dashboard</h1>
                <Button>Fragebogen erstellen</Button>
            </div>
            <div className=" mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Gesamt Anzahl an Fragebögen
                    </CardTitle>
                    <Inbox className="text-blue-600"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Offene Fragebögen
                    </CardTitle>
                    <BookOpen className="text-blue-600"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Abgeschlossene Fragebögen</CardTitle>
                    <BookOpenCheck className="text-blue-600"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
        </main>
    )
}

export default Dashboard