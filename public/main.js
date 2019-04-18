const video = document.querySelector("#video")

const remoteControl = new remoteControl(video)
const recognition = new webkitSpeechRecognition()

recognition.continuous = true
recognition.interimResults = true
recognition.lang = "en-US"
recognition.continuous = true
recognition.start()

recognition.onresult = function(event) {
    for(var i = event.resultIndex; i < event.results.length; i++) {
        if(event.results[i].isFinal) {
            if(event.results[i][0].transcript.trim() == "play") {
                remoteControl.play()
            }
            if(event.results[i][0].transcript.trim() == "stop") {
                remoteControl.stop()
            }
            if(event.results[i][0].transcript.trim() == "mute") {
                remoteControl.mute
            }
            if(event.results[i][0].transcript.trim() == "stop") {
                remoteControl.unmute()
            }
            console.info(`You said: ${event.results[i][0].transcript}`)
        }
    }
}