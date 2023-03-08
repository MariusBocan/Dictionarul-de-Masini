// profile pic

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});


imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

file.addEventListener('change', function(){
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

// profile info

function autofill () {
    var nume = document.getElementById('name').value;
    localStorage.setItem('nume', nume);
  
    var prenume = document.getElementById('surname').value;
    localStorage.setItem('prenume', prenume);
  
    var nrtelefon = document.getElementById('number').value;
    localStorage.setItem('numar', nrtelefon);
  
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
    return false;
  
  }
  
  document.getElementById('numeProfil').innerHTML=localStorage.getItem('nume');
  document.getElementById('prenumeProfil').innerHTML=localStorage.getItem('prenume');
  document.getElementById('nrtelefonProfil').innerHTML=localStorage.getItem('numar');
  document.getElementById('emailProfil').innerHTML=localStorage.getItem('email');