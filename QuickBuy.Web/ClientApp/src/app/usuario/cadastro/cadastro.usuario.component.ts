import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { ConsultaCepService } from "../../servicos/cep/consulta.cep.servico";

@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})

export
  class CadastroUsuarioComponent implements OnInit {
  public usuario: Usuario;
  private ativar_spinner: boolean;
  public mensagem: string;
  public usuarioCadastrado: boolean;

  constructor(private usuarioServico: UsuarioServico, private cepService: ConsultaCepService) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    this.ativar_spinner = true;
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        sucess => {
          this.usuarioCadastrado = true;
          this.mensagem = "";
          this.ativar_spinner = false;
        },
        err => {
          this.mensagem = err.error;
          this.ativar_spinner = false;
        }
      );
  }

  consultaCEP(cep, form) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => {
          this.populaDadosForm(dados, form);
          console.log(JSON.parse(dados.toString()));
          console.log(dados);
        });
    }
  }
  populaDadosForm(dados, formulario) {
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
      estado: dados.uf,
      cidade: dados.localidade,
      bairro: dados.bairro,
      endereco: dados.logradouro
    });

    // console.log(form);
  }
}
