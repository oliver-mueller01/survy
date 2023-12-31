import { TimelineItemDescription } from "./timeline/TimeLineItemDescription"
import { Timeline } from "./timeline/Timeline"
import { TimelineItemSmallText } from "./timeline/TimelineItemSmallText"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const EventTimeline = () => {

    const test = (<>
        <TimelineItemDescription>Small</TimelineItemDescription>
        <TimelineItemSmallText>Test</TimelineItemSmallText>
      </>)
      
    return(
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Verlauf
          </CardTitle>
        </CardHeader>
        <CardContent>
        <Timeline activeItem={0} items={[{title: "Bullet1", children:test},{title: "Bullet2", children:test}]}/>
        </CardContent>
      </Card>
    )
}
export default EventTimeline