let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpeg') {
      myImage.setAttribute ('src','images/firefox2.jpeg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.jpeg');
    }
}
