import Knex from 'knex'

export async function seed(knex:Knex){
  await knex('items').insert([
    { id:1, title: 'Lâmpadas', image: 'lampadas.svg' },
    { id:2,title: 'Pápeis e Papelao', image: 'papeis-papelao.svg' },
    { id:3,title: 'Pilhas e baterias', image: 'baterias.svg' },
    { id:4,title: 'Resíduos Eletrônicos', image: 'organicos.svg' },
    { id:5,title: 'Resíduos Orgânicos', image: 'lampadas.svg' },
    { id:6,title: 'Óleo de cozinha', image: 'oleo.svg' },
  ]);
}