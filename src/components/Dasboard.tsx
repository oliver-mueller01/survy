"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpen, BookOpenCheck, Inbox, Loader2 } from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import { trpc } from '@/app/_trpc/client'
import Link from "next/link"
import EventTimeline from "./EventTimeline"



const Dashboard = () => {
  const {data: forms, isLoading} = trpc.getForms.useQuery()
  const openForms = forms?.filter((form) => form.status === "OPEN")
  const closedForms = forms?.filter((form) => form.status === "CLOSED")

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-5 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-cemter sm:gap-0">
        <h1 className="mb-3 font-bold text-4xl text-gray-900">Dashboard</h1>
        <Button>Fragebogen erstellen</Button>
      </div>
      {forms ?(<div className=" mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Gesamt Anzahl an Fragebögen
            </CardTitle>
            <Inbox className="text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{forms?.length}</div>
            <Link className={buttonVariants({
              className: "ml-0 pl-0",
              variant: "link"
            })} href={""}>Alle Fragebögen anzeigen</Link >
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Offene Fragebögen
            </CardTitle>
            <BookOpen className="text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{openForms?.length}</div>
            <Link className={buttonVariants({
              className: "ml-0 pl-0",
              variant: "link"
            })} href={""}>Offene Fragebögen anzeigen</Link >
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Abgeschlossene Fragebögen</CardTitle>
            <BookOpenCheck className="text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{closedForms?.length}</div>
            <Link className={buttonVariants({
              className: "ml-0 pl-0",
              variant: "link"
            })} href={""}>Abgeschlossene Fragebögen anzeigen</Link >
          </CardContent>
        </Card>
        <Card className="col-span-2	 ">

        </Card>
            <EventTimeline data={forms}/>

      </div>) : isLoading ? (
        <div className="w-full mt-60 flex justify-center">
        <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-800"/>
        </div>
    </div>
      ): (<h1>No data</h1>)}
    </main>
  )
}

export default Dashboard