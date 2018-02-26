import React from 'react'
import ShowCard from './ShowCard'

const ShowList = (props) => {

  console.log(props.events)

  const e = props.events
  .map((event) => <ShowCard key={event.id} name={event.display_name} date={event.date} time={event.time}/>)


    return (
      <div>
        {e}
      </div>
    )


}


export default ShowList
