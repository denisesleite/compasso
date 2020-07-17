$('form').on('submit', function (e) {
  e.preventDefault();
  var inputUsuario = $("input[name='usuario']").val();
  var inputSenha = $("input[name='senha']").val();

  console.log(inputUsuario);
  console.log(inputSenha);

  if (
    inputUsuario == '' ||
    inputSenha == '' ||
    inputUsuario !== 'teste@gmail.com' ||
    inputSenha != 123
  ) {
    $('.error span').addClass('active');
    $('.form-input input').addClass('error-input');
  } else {
    window.location.href = './tela-inicial.html';
  }
});

/** BOTÃO LOGOUT */
$('.logout').on('click', function (e) {
  e.preventDefault();
  window.location.href = './index.html';
});

/** MENU MOBILE */
$('.hamburguer img').on('click', function () {
  $('.menu-mobile').addClass('active');
  $('.layer').addClass('active');
});

$('.close img').on('click', function () {
  $('.menu-mobile').removeClass('active');
  $('.layer').removeClass('active');
});

/** CONTADOR  */
var count = 601;

function start() {
  if (count - 1 >= 0) {
    count -= 1;
    $('.time h1').text(count);
    setTimeout(start, 1000);
    console.log('tempo:' + count);
  }
}

start();
