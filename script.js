const number = document.querySelector('.number');

document.addEventListener('keyup', function(event){
    if (event.target = event.key){
        document.getElementById("keyCode").innerHTML = event.which;
        document.getElementById('key').innerHTML = event.key;
        document.getElementById('location').innerHTML = event.location;
        document.getElementById('code').innerHTML = event.code;
        document.getElementById("which").innerHTML = event.which;
    }

    console.log('Key: ', event.key);
    console.log('Key: ', event.location);
    console.log('Key: ', event.code);
    console.log('Key: ', event.which);
});

