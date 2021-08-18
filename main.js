function setup()
 {  canvas=createCanvas(300,300)
    canvas.center()    
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QcOIe9vzM/model.json",model_loaded)
}
function draw(){
    image(video,0,0,300,300)
    classifier.classify(video,got_results)
}
function model_loaded(){
    console.log("model_loaded")
}
function got_results(error,result){
if(error){
    console.error(error);
}
else{
    console.log(result)
   document.getElementById('name').innerHTML=result[0].label
   document.getElementById('accuracy').innerHTML=result[0].confidence.toFixed(3)
}
}