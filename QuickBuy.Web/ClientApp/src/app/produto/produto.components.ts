import { Component } from "@angular/core"

@Component({
  selector: "app-produto",
  template: "<html><body>{{obterNome()}}</body> </html>"
})
export class ProdutoComponent {
  id: number;
  nome: string;
  preco: number;

  public obterNome(): string {
    //return this.nome;
    return "Samsung";
  }
}
