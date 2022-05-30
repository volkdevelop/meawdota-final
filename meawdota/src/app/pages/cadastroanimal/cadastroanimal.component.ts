import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastroanimal } from 'src/app/cadastroanimal';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastroanimal.component.html',
  styleUrls: ['./cadastroanimal.component.css']
})
export class CadastroanimalComponent implements OnInit {


  animal: Cadastroanimal = {
    animal_sexo: '' ,
    animal_nome: '',
    animal_idade: '',
    animal_descricao: '',
    animal_castracao: '',
    animal_vacinacao: '',
    animal_vermifugado: '',
    animal_bairroocorrencia: '',
    animal_ruaocorrencia: '',
    animal_especie: '',
    animal_pessoacad:'',
    animal_situacao: '',
  }

  createForm(animal: Cadastroanimal) {
    let cad_animal;
    cad_animal = this.formBuilder.group({
      animal_nome: [animal.animal_nome],
      animal_especie: [animal.animal_especie],
      animal_sexo: [animal.animal_sexo],
      animal_idade: [animal.animal_idade],
      animal_descricao: [animal.animal_descricao],
      animal_castracao: [animal.animal_castracao],
      animal_vacinacao: [animal.animal_vacinacao],
      animal_bairroocorrencia: [animal.animal_bairroocorrencia],
      animal_vermifugado: [animal.animal_vermifugado],
      animal_pessoacad:[animal.animal_pessoacad],
      animal_situacao:[animal.animal_situacao]
    })
    return cad_animal;
  }

  // onSubmit() {
    
  //   console.log(this.formCliente.value);

  //   this.formCliente.reset(new Cliente());
  // }

  router: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  // createProduct(): void {
  //   this.productService.create(this.product).subscribe(() => {
  //     this.productService.showMessage('Produto criado!')
  //     this.router.navigate(['/products'])
  //   })
  // }

  cancel(): void {
    this.router.navigate(['home'])
  }



}
