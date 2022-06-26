expressWs.app.ws('/calculate', function(ws, req) { // Get Messages From ws
    console.log("from wxpressWs");
    ws.on('message', function(msg) {
        console.log("From Other the Sider", msg);
    })
});
const aWss = expressWs.getWss('/calculate');
// console.log('aWss', aWss);
module.exports.sendWebSocket = function sendWebSocket(data) {
    console.log("sendWebSocket", data);
    aWss.clients.forEach(function(client) {
        // console.log("sendWebSocket1", client);
        client.send(data);
    })
}




//in function import server . js =
sendwebSocketMessage = {}
   console.log("after calculation", final_lat, final_lon);
    sendWebSocketData = {};
    sendWebSocketData['lat'] = final_lat;
    sendWebSocketData['lng'] = final_lon;
    sendwebSocketMessage.sendWebSocket(JSON.stringify(sendWebSocketData));
