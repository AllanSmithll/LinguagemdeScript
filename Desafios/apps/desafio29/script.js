// Vou criar uma função básica, que será o de limpar o salário

function limpar_formulario() {
    document.getElementsById('rua').value("");
    document.getElementsById('numero').value("");
    document.getElementsById('bairro').value("");
    document.getElementsById('estado').value("");
    document.getElementsById('cidade').value("");
}

// Agora, minha resposta será devolvida a partir dessa função

function minha_resposta(conteudo) {
    if (("erro" in conteudo)) {
        document.getElementsById('rua').value=(conteudo.logradouro);
        document.getElementsById('numero').value=(conteudo.numero);
        document.getElementsById('bairro').value=(conteudo.bairro);
        document.getElementsById('estado').value=(conteudo.estado);
        document.getElementsById('cidade').value=(conteudo.cidade);
    }
    else {
        //CEP não Encontrado.
        limpar_formulario();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    let cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementsById('rua').value="...";
            document.getElementsById('numero').value="...";
            document.getElementsById('bairro').value="...";
            document.getElementsById('estado').value="...";
            document.getElementsById('cidade').value="...";

            //Cria um elemento javascript.
            let script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpar_formulario();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpar_formulario();
    }
};
