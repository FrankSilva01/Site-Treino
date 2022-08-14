        
         let currentImgIndex =1;
         let ImgSrcArray = [ //caminho das suas imgs aqui
         'https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Jeep-Compass-2022-80-anos-13.jpg?quality=70&strip=info',
         'https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/03/09124938/t-cross-oettinger-6.jpg',
         'https://s2.glbimg.com/Hr_feqcvuRHBC9zcSzyehwiJ7j4=/0x0:1980x1284/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/B/I/P8eFwfQLCxL7C6pfBIAQ/hyundai-creta-2.0.jpg',
         'http://mundodoautomovelparapcd.com.br/wp-content/uploads/2019/08/Nissan-Kicks_2020-09-1024x668.jpg'
         ];
         email = document.getElementById('e-mail').value;
         nome = document.getElementById('nome').value;
         footer = document.getElementById('footer');
         var prevScrollpos = window.pageYOffset;


        //  FUNÇÃO PARA O BANNER TROCAR AS IMAGEMS "SLIDE SHOW"
         function trocar(){

            if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
            {
                currentImgIndex=0;
            }
            document.getElementById("imagem").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
                currentImgIndex++; // incrementa a nossa referencia

            }
 

    // VALIDAÇÃO SE OS CAMPOS DO FORMULARIO ESTAO PREENCHIDOS

    // Criação de um objeto chamado pessoa com as informações dos inputs nome, email e telefone
    let pessoa = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("e-mail").value,
        telefone: document.getElementById("telefone").value
    };
    
    // Armazenando as informações do objeto pessoa no localStorage
    localStorage.setItem('pessoa', JSON.stringify(pessoa));
        let pessoaString = localStorage.getItem('pessoa');
        let pessoaObj = JSON.parse(pessoaString);

// Validação do formulário para verificar se os campos estão brancos ou não e se já existe algum nome, telefone e email igual a esse registrado no local storage
    function valida_form (){   

        if(document.getElementById("nome").value =="")
        {
        alert('Por favor, preencha o campo *Nome');
        document.getElementById("nome").focus();
        return false
        }  else if 
            (document.getElementById("nome").value === pessoa.nome)
                {
                alert('Este nome já esta em uso');
                document.getElementById("nome").focus();
                return false
        }
     
            else if (document.getElementById("e-mail").value =="")
            {
            alert('Por favor, preencha o campo *E-mail');
            document.getElementById("e-mail").focus();
            return false
        }
            else if  (document.getElementById("e-mail").value === pessoa.email)
            {
            alert('Este e-mail já esta cadastrado');
            document.getElementById("e-mail").focus();
            return false
}
        else if (document.getElementById("telefone").value =="")
        {
            alert('Por favor, preencha o campo *Telefone');
            document.getElementById("telefone").focus();
            return false
        }   
        else if (document.getElementById("telefone").value === pessoa.telefone)
        {
            alert('Telefone já cadastrado');
            document.getElementById("telefone").focus();
            return false
        }  
        else 
        {  
            document.getElementById('mensagem').innerHTML = `Obrigado pelo envio 
            ${nome} em breve faremos contato pelo e-mail: ${email}`
            
         }     
       
        }

    // FUNÇÃO PARA TROCAR A COR DO RODAPÉ QUANDO O SCROLL CHEGAR NELE
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
                if (prevScrollpos < currentScrollPos)
                            {
                                document.getElementById("footer").style.backgroundColor = "rgb(22, 106, 109, 0.9)";
                                document.getElementById("footer").style.color = "white";
                            } 
                      else 
                            {
                                document.getElementById("footer").style.backgroundColor = "black";
                                document.getElementById("footer").style.color = "white";
                            }

          prevScrollpos = currentScrollPos;
          };    
