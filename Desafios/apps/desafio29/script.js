// Terminado dia 23/10/2022

// Minha resposta será devolvida a partir dessa função

function minha_resposta(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        // document.getElementById('numero').value=(conteudo.numero);  Não é necessário, pois deve-se colocar manualmente
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('estado').value=(conteudo.uf);
        document.getElementById('cidade').value=(conteudo.localidade);
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != " ") {

        //Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('numero').value="";
            document.getElementById('bairro').value="...";
            document.getElementById('estado').value="...";
            document.getElementById('cidade').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=minha_resposta';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        }

        else if (cep == " ") {
            alert("CEP vazio.")
        }

        else {
            //cep é inválido.
            alert("CEP não encontrado.");
        }
    }
}

