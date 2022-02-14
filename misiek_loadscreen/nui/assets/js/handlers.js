/**
 * Loading Screen Event Handlers
 */
 var count = 0;
 var thisCount = 0;
 var hasNotified = false;
 
 function sendEvent(name, data = {}) {
     if(window.invokeNative) {
         fetch(`https://misiek_loadscreen/${name}`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json; charset=UTF-8',
             },
             body: JSON.stringify(data)
         })
     } else {
         console.log(data)
     }
 }
 
 
 const handlers = {
     startInitFunctionOrder(data)
     {
        count = data.count;
     },
     initFunctionInvoking(data)
     {
        var percentage = Math.min(100, ((data.idx / count) * 100));
        app.progress = percentage
        app.status = `Invoking ${data.name}...`
     },
     startDataFileEntries(data)
     {
        count = data.count;
     },
     performMapLoadFunction(data)
     {
        thisCount++;
     },
     onLogLine(data)
     {
        app.status = `${data.message}...`
     }
 };
 
 const fallbackHandler = function(data) {
     if(data.handover) {
        sendEvent("handover", window.nuiHandoverData || {})
     } else if(data.allow) {
        sendEvent("continue")
     }
 }
 
 if(window.invokeNative) {
     window.addEventListener('message', (e) => {
         let handler = handlers[e.data.eventName || "null"] || fallbackHandler
         handler(e.data)
     });
 }
 