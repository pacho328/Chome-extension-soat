chrome.runtime.sendMessage({todo: "showPageAction"})

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "changeColor"){
        if(request.url.includes("megared.co")){
            $('#usuario').val("352153")
            $('#contrasena').prop("readonly", false)
            chrome.storage.sync.get("passmega", function(budget){
                if(budget.passmega){
                    $('#contrasena').val(budget.passmega);
                }
            });
            var base64 = getBase64Image(document.querySelector("img[src='plugins/captcha/captcha.php']"));
            // console.log(base64);
            // fetch('https://api.ocr.space/parse/imageurl?apikey=a56ba5eb808895&base64Image='+base64)
            // .then(response => response.json())
            // .then(json => console.log(json))
            var url = 'https://api.ocr.space/parse/image';
            console.log(base64);
            var data = {base64image: base64};

            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'apikey': 'a56ba5eb808895&base64'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        }
        if(request.url.includes("esbus.transfiriendo")){
            $('#iusername').val("AGROMACA SUR")
            chrome.storage.sync.get("passsoat", function(budget){
                if(budget.passsoat){
                    $('input[name="password"]').val(budget.passsoat);
                }
            });
        }
        
        
        
    }
});
function screenshot(){
    html2canvas(document.querySelector("img[src='plugins/captcha/captcha.php']")).then(canvas => {
        var img    = canvas.toDataURL("image/png");
        console.log(canvas);
        var dlLink = document.createElement('a');
        dlLink.download = "test";
        dlLink.href = img;
        dlLink.dataset.downloadurl = ["image/png", dlLink.download, dlLink.href].join(':');
        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
    });
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace("png", "jpeg");
    return dataURL;
}