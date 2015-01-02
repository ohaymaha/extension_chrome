function save_options() {
  var color = document.getElementById('color').value; 
  chrome.storage.sync.set({
    OHMfavoriteColor: color
  }, function() { 
    var status = document.getElementById('status');
    status.textContent = 'Lưu thành công!';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() { 
  chrome.storage.sync.get({
    OHMfavoriteColor: '#F20D0D'
  }, function(items) {
    document.getElementById('color').value = items.OHMfavoriteColor; 
    document.getElementById('showcolor').style.background = items.OHMfavoriteColor; 
  });
}
document.addEventListener('DOMContentLoaded', restore_options); 
document.getElementById('save').addEventListener('click', save_options);


$('input#color').simpleColorPicker(); 