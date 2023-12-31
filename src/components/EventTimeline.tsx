import Link from "next/link"
import { TimelineItemDescription } from "./timeline/TimeLineItemDescription"
import { Timeline, TimelinePropsItem } from "./timeline/Timeline"
import { TimelineItemSmallText } from "./timeline/TimelineItemSmallText"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { buttonVariants } from "./ui/button"
import { Badge } from "@/components/ui/badge"
import { FileClock } from "lucide-react"


interface EventTimelineProps {
  data: {
      title: string;
      id: string;
      createdAt: string;
      closedAt: string | null;
      ownerId: string;
      status: string | null;
  }[] | undefined
}
const EventTimeline = ({data}: EventTimelineProps) => {
    
    const createJSXElements = (createdAt : Date, id: String, isClosed: boolean) => {
      let year = new Intl.DateTimeFormat('de', { year: 'numeric' }).format(createdAt);
      let month = new Intl.DateTimeFormat('de', { month: '2-digit' }).format(createdAt);
      let day = new Intl.DateTimeFormat('de', { day: '2-digit' }).format(createdAt);
      let hours = new Intl.DateTimeFormat('de', { hour: '2-digit' }).format(createdAt);
      let minutes = new Intl.DateTimeFormat('de', { minute: '2-digit' }).format(createdAt);
      const timeString = `${day}.${month}.${year} um ${hours.replace(" Uhr","")}:${minutes.padStart(2,"0")} Uhr`
      return(<>
        <TimelineItemDescription className="flex flex-row justify-between">
        <div className="mr-2 pt-1 font-medium">{timeString}</div>
          {/* {isClosed ? <Badge variant="default">Abgeschlossen </Badge> : <Badge variant="secondary">Erstellt </Badge>} */}  
        </TimelineItemDescription>
      </>)
    }
    var sortedDates = null
    var list2 : TimelinePropsItem[] = [{title:"INIT", children:"", isClosed:false}]
    if(data){
      sortedDates = data
      .map(obj => { 
        let dateToUse = obj.createdAt
        if(obj.status === "CLOSED" && obj.closedAt){
          dateToUse = obj.closedAt
        }
        return { ...obj, displayDate: new Date(dateToUse)} 
      })
      .sort((a, b) => b.displayDate.getTime() - a.displayDate.getTime())

      list2 = sortedDates.map(obj => {
        var isClosed : boolean = (obj.status === "CLOSED")
        var jsx = createJSXElements(obj.displayDate,obj.id,isClosed)
        return {
          title: obj.title, 
          isClosed: isClosed,
          children: jsx
        }})
    }

     return(
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Verlauf
          </CardTitle>
          <FileClock  className="text-blue-600"/>
        </CardHeader>
        <CardContent>
        {sortedDates  ?  <Timeline activeItem={0} items={list2.slice(0,5)}/> : <h1>Kein Verlauf verfügbar</h1>}
        </CardContent>
      </Card>
    )

}
export default EventTimeline