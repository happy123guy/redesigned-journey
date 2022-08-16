var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();



function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next Selfie in 2 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function() {
        image_id= "selfie1";
         take_snapshot();
         speak_data = "Taking your next Selfie in 2 seconds";
         var utterThis = new SpeechSynthesisUtterance(speak_data);
         synth.speak(utterThis); }, 4000); 

         setTimeout(function() {
            image_id= "selfie2";
             take_snapshot();
             speak_data = "Taking your next Selfie in 2 seconds";
             var utterThis = new SpeechSynthesisUtterance(speak_data);
             synth.speak(utterThis); }, 6000);

             setTimeout(function() {
                image_id= "selfie3";
                 take_snapshot();
                 speak_data = "Taking your next Selfie in 2 seconds";
                 var utterThis = new SpeechSynthesisUtterance(speak_data);
                 synth.speak(utterThis); }, 8000);

}

function take_snapshot(){
    console.log(image_id);

    Webcam.snap(function(data_uri) {
        if(image_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src"'+data_uri+'">'
        }
        if(image_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src"'+data_uri+'">'
        }
        if(image_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src"'+data_uri+'">'
        }
    });

}

recognition.onresult = function (event){
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if(Content == "selfie"){
        console.log("taking selfie...")
        speak();
    }
}