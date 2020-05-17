var dropFileForm = document.getElementById("dropFileForm");
var fileLabelText = document.getElementById("filelabeltext");
var uploading = document.getElementById("uploading");
var fileInput =  document.getElementById("fileInput");
var droppedFiles
function overrideDefault(event){
    console.log('override callwed')
    event.preventDefault();
    event.stopPropagation();
}

function fileHover(){
    console.log('file hover called')
    dropFileForm.classList.add("fileHover");
}

function fileHoverEnd(){
    dropFileForm.classList.remove("fileHover");
}

function addFiles(event){
    droppedFiles = event.target.files ||  event.dataTransfer.files;
    showFiles(droppedFiles);
}

function showFiles(files){
    console.log(files);
    if(files.length > 1){
        fileLabelText.innerText = files.length + " files selected";
    } else {
        fileLabelText.innerText = files[0].name;
    }
}

function uploadFiles(event){
    event.preventDefault();
    changeStatus("Uploading ...");

    var formData = new FormData();

    for(var i =0,file; file = droppedFiles[i]; i++){
        formData.append(fileInput.name,file,file.name)
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(data){
        // handle response
    }

    xhr.open(dropFileForm.method,dropFileForm.action, true);
    xhr.send(formData);

}

function changeStatus(text){
    uploading.innerText = text;
}
