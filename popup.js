$(function(){
    $('#btnChange').click(function(){
        chrome.tabs.query({active: true, currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{todo:"changeColor",url: tabs[0].url})
        });
    })
})