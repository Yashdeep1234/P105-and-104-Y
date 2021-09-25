Webcam.set({
    width: 300,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function Take_Snapshot() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img id="Photo" src="' + img + '">';
    }
    );
}
//https://teachablemachine.withgoogle.com/models/O3WVNGKa8/
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O3WVNGKa8/model.json', model_Load)

function model_Load() {
    console.log('Model loaded');
}

function Check() {
    img = document.getElementById("Photo");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("Result_Object_Name").innerHTML = results[0].label;
        document.getElementById("Result_Object_Accuracy").innerHTML = results[0].confidence;
    }
}