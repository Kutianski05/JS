let alunos_lindos = ["Mago", "Nerso", "Brunao da Ibema"]

console.log(alunos_lindos)
console.log(alunos_lindos[1])

alunos_lindos.push("do o cumente")
console.log(alunos_lindos)

alunos_lindos.unshift("depay do curintia")
console.log(alunos_lindos)

alunos_lindos.shift()
console.log(alunos_lindos)

alunos_lindos[1] = "os dega"
console.log(alunos_lindos)

console.log("----------------------------")

//for(let i = 0; i < alunos_lindos.length; i++){
 //   console.log("O aluno ", alunos_lindos[i], "E um jaguara")
//}*/

for(let aluno of alunos_lindos){
    console.log("o aluno", aluno, "e um gay")
}

