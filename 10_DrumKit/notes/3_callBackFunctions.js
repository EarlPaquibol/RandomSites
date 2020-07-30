//simulating the event listener function in the DOM

function eventListener(EventTheUserWants, callback){

    //detect event code                     //creates objects depending on events that are happening

    let eventThatHappened = {               //example of an event that happened
        eventType: "Keypress",
        key: "w",
        duration: 2
    }

    let anotherEventThatHappened = {         //creates objects depending on events that are happening
        eventType: "Click",
        xAxis: 256,
        yAxis: 300
    }

    if (eventThatHappened.eventType === EventTheUserWants){
        callback(eventThatHappened);
    }
}


eventListener("Keypress", function(event){
    console.log(event);
})