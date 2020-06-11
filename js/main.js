function validar() {
  let nome = $("#nome")
  let email = $("#email")
  let senha = $("#senha")
  let confirmar = $("#confirmar")
  let sucesso = $("#sucesso") //recuperar a div success
  let erro = $("#erro") //recuperar a div error

  //Garantir a classe para as divs
  sucesso.addClass("d-none")
  erro.addClass("d-none")


  if(nome.val() == "" || senha.val() == "" || confirmar.val() == "") {
    erro.removeClass("d-none")
  } else {
    sucesso.removeClass("d-none")
  }
}