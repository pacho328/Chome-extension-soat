$(function(){
    chrome.storage.sync.get(['passmega','passsoat'], function(budget){
        if(budget.passmega){
            $('#passmega').val(budget.passmega);
        }
        if(budget.passsoat){
            $('#passsoat').val(budget.passsoat);
        }
    });
    $("#savePass").click(function() {
        var passm = $('#passmega').val();
        var passs = $('#passsoat').val();
        if(passm){
            chrome.storage.sync.set({"passmega":passm});
        }
        if(passs){
            chrome.storage.sync.set({"passsoat":passs});
        }
        var notifOptions = {
            type: 'basic',
            iconUrl: './assets/email48.png',
            title: 'Exitoso!',
            message: 'Se han guardado con exito!'
        }
        chrome.notifications.create('savePass',notifOptions);
        });
    });
