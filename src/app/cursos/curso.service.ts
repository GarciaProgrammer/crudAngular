import { Curso } from './Curso';
import { Injectable } from '@angular/core';

//Acesso total do servico
@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor() {}

  //Cursos
  private vetorCursos: Curso[] = [
    new Curso('PHP', 650, 'desenvolvimento'),
    new Curso('Java', 250, 'desenvolvimento'),
    new Curso('Visual', 350, 'Designe'),
  ];

  //Cadastro de cursos
  public cadastrarCurso(curso: Curso) {
    this.vetorCursos.push(curso);
  }

  //selecao de cursos
  public listarCurso() {
    return this.vetorCursos;
  }

  //alteração de cursos
  public alterar(id: number, curso: Curso) {
    this.vetorCursos[id] = curso;
  }

  // exclusao de cursos
  public exclur(id: number) {
    this.vetorCursos.splice(id, 1);
  }
}
