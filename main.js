precdtion1 = "";
predction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("Result").innerHTML ='<img id="captured_image" scr="'+ data_uri +'">';
    });
}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelloaded);

function modelloaded() {
    console.log("modelloaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata1 = "the first prediction is " + precdtion1;
    speakdata2 = "and the second prediction is " + precdtion2;
    var speakthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(speakthis)
}