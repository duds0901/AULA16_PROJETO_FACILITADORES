//Métodos facilitadores - includes, startWith e endsWith
//(informações dentro de arrays)

//includes
let nomes = ['Amir', 'Bemir', 'Cemir'];
console.log(nomes.includes('Bemir'));
console.log(nomes.includes('AMIR'));

if(nomes.includes('Amil')){
    console.log("Nome encontrado");
}else{
    console.log("Nome não escontrado");
};

//starsWith
let aluno = 'Albano';
console.log(aluno.startsWith("alb"));
console.log(aluno.startsWith("Alb"));

//endsWith
console.log(aluno.endsWith('ano'));
console.log(aluno.endsWith('anO'));

