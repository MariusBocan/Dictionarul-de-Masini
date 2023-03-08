$(document).ready(function () {
    $("body").css("background-color", "azure");
    $("h1").click(function () {
      $(this).hide();
    });
  
    $(".buton1").click(function () {


      const arrayTabel = [
        [1, 1, 2, 3],
        [1, 10, 5, 2.5],
        [2, 75, 38, 15],
        [3, 300, 150, 60],
        [4, 1050, 525, 210],
        [5, 5250, 2625, 1050],
        [6, 9450, 4725, 1890],
      ];

      const arrayTime = [
        [0, "nimic"],
        [1, "O ora"],
        [2, "O zi"],
        [3, "O saptamana"],
        [4, "O luna"],
        [5, "Un semestru"],
        [6, "Un an"]
      ]
      const arrayZone = [
        [0, "nimic"],
        [1, "Zona 0"],
        [2, "Zona 1"],
        [3, "Zona 2"]
      ]



      let indexZona = parseInt($(".selectZone option:selected").val());
      let indexTimp = parseInt($(".selectTime option:selected").val());

      
      $(".pretFinal").text(arrayTabel[indexTimp][indexZona]);

      return arrayTabel[indexTimp][indexZona];
    });
  
    // Alta linie cu evenimente similare facuta in ES6 - operatorul ternary si arrow function la discretie
  
    $(".buton2").click(function () {
      // zona evenimentului de click pe al doilea buton
      let selectZonaa = $(".selectZonaa option:selected").text();
      let selectTimpp = $(".selectTimpp option:selected").text();
      let pretAfisatt = 1;
      // 1 singur array. simulare baza de date
  
      const arrayTabel = [
        [1, 1, 2, 3],
        [1, 10, 5, 2.5],
        [2, 75, 38, 15],
        [3, 300, 150, 60],
        [4, 1050, 525, 210],
        [5, 5250, 2625, 1050],
        [6, 9450, 4725, 1890],
      ];

      const arrayTime = [
        [0, "nimic"],
        [1, "O ora"],
        [2, "O zi"],
        [3, "O saptamana"],
        [4, "O luna"],
        [5, "Un semestru"],
        [6, "Un an"]
      ]
      const arrayZone = [
        [0, "nimic"],
        [1, "Zona 0"],
        [2, "Zona 1"],
        [3, "Zona 2"]
      ]



      function calculatorPret() {

        /*
        let indexTimp = -1;
        for(let i = 0; i < arrayTime.length; i++){
          if (arrayTime[i][1] == selectTimpp){
            indexTimp = arrayTime[i][0];
            break;
          }
        }
    
        let indexZona = -1
        for(let i = 0; i < arrayZone.length; i++)
        {
          if(arrayZone[i][1] == selectZonaa){
            indexZona = arrayZone[i][0];
          }
        }

        return arrayTabel[indexTimp][indexZona];
*/



let indexZona = $(".selectZonaa option:selected").value();
let indexTimp = $(".selectTimpp option:selected").value();
return arrayTabel[indexTimp][indexZona];

        if (selectZonaa == arrayTabel[0][1]) {

          return 

          return selectTimpp == arrayTabel[1][0]
            ? (pretAfisatt = arrayTabel[1][1])
            : selectTimpp == arrayTabel[2][0]
            ? (pretAfisatt = arrayTabel[2][1])
            : selectTimpp == arrayTabel[3][0]
            ? (pretAfisatt = arrayTabel[3][1])
            : selectTimpp == arrayTabel[4][0]
            ? (pretAfisatt = arrayTabel[4][1])
            : selectTimpp == arrayTabel[5][0]
            ? (pretAfisatt = arrayTabel[5][1])
            : selectTimpp == arrayTabel[6][0]
            ? (pretAfisatt = arrayTabel[6][1])
            : "nimic";
        } else if (selectZonaa == arrayTabel[0][2]) {
          return selectTimpp == arrayTabel[1][0]
            ? (pretAfisatt = arrayTabel[1][2])
            : selectTimpp == arrayTabel[2][0]
            ? (pretAfisatt = arrayTabel[2][2])
            : selectTimpp == arrayTabel[3][0]
            ? (pretAfisatt = arrayTabel[3][2])
            : selectTimpp == arrayTabel[4][0]
            ? (pretAfisatt = arrayTabel[4][2])
            : selectTimpp == arrayTabel[5][0]
            ? (pretAfisatt = arrayTabel[5][2])
            : selectTimpp == arrayTabel[6][0]
            ? (pretAfisatt = arrayTabel[6][2])
            : "nimic";
        } else if (selectZonaa == arrayTabel[0][3]) {
          return selectTimpp == arrayTabel[1][0]
            ? (pretAfisatt = arrayTabel[1][3])
            : selectTimpp == arrayTabel[2][0]
            ? (pretAfisatt = arrayTabel[2][3])
            : selectTimpp == arrayTabel[3][0]
            ? (pretAfisatt = arrayTabel[3][3])
            : selectTimpp == arrayTabel[4][0]
            ? (pretAfisatt = arrayTabel[4][3])
            : selectTimpp == arrayTabel[5][0]
            ? (pretAfisatt = arrayTabel[5][3])
            : selectTimpp == arrayTabel[6][0]
            ? (pretAfisatt = arrayTabel[6][3])
            : "nimic";
        } else {
          return pretAfisatt;
        }
      }
  
      calculatorPret();
  
      $(".costFinal").text(pretAfisatt);
    });
  
    $(".buton3").click(function () {
      window.location.href = "signUp.html"; // window - fereastra afisata in browser; location.href este referinta catre fisierul afisat
    });
  
    $(".buton4").click(function () {
      window.location.href = "index.html";
    });
  
    const arrayUser = [];
  
    $(".buton5").click(function () {
      let prenume = $(".prenume").val();
      let nume = $("#nume").val();
      let email = $("#email").val();
      let pswd = $("#pwd").val();
  
      arrayUser.push(prenume);
      arrayUser.push(nume);
      arrayUser.push(email);
      arrayUser.push(pswd);
  
      alert(arrayUser);
    });
  
    $(".buton6").click(function () {
      let emailCheck = $("#emailCheck").val();
      let pwdCheck = $("#pwdCheck").val();
      if (emailCheck === arrayUser[2] && pwdCheck === arrayUser[3]) {
        alert("Datele de logare sunt corecte");
        window.location.href = "user.html";
      } else {
        alert("Email sau Parola gresite");
      }
    });
  
    // Limita de jos a evenimentului de load
  });


  function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var surname = document.getElementById('surname');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Va rugam, adaugati email-ul.');

    }else if(pw.value.length == 0){
        alert('Va rugam, adaugati o parola.');

    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Va rugam, adaugati datele cerute in casuta.');

    }else if(pw.value.length > 8){
        alert('Maxim 8 caractere.');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Va rugam, adaugati o litera mare.');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Va rugam, adaugati o litera mica.');

    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        alert('Contul tau a fost creat.');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
      window.location.href = "profile.html";
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}

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