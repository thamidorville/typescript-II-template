/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
type person = { 
	name: string, 
	age: number
};

const astrodev: person = {
	name: "Astrodev",
	age: 30
};
*/

type Tperson = {
    id: number | string,
    name: string,
    email: string,
    password: string,
    role: string
}

const usuario: Tperson = {
    id: 1,
    name: "Matheus",
    email: "matheus@email.com",
    password: "123456",
    role: "Admin"
}



// 2. Type Aliases para 2 contas (AdminAccount, NormalAccount) 
// com as propriedades nickname e permission;

type AdminAccount = {
    nickname: string,
    permission: boolean
}

type NormalAccount = {
    nickname: string,
    permission: boolean
}


const userAdmin: AdminAccount = {
    nickname: "Thami",
    permission: true
}

const userNormal: NormalAccount = {
    nickname: "Thatha",
    permission: false
}



// 3. Crie exemplos de usuários Admin e Normal;


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson; */

//ENUM, que permite a declaração de tipos de 
    // variáveis quando elas assumem valores pré-definidos (dados que não mudam).

enum ROLE { 
    ADMIN = "Admin",
    NORMAL = "Normal",
}

// const usuario: Tperson = {
//     id: 1,
//     name: "Matheus",
//     email: "matheus@email.com",
//     password: "123456",
//     role: ROLE.ADMIN
// }

// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);


type PersonAdmin = Tperson & AdminAccount

const usuarioAdmin: PersonAdmin = {
    id: 100,
    name: "Victor",
    email: "vitor@email.com",
    password: "4321",
    role: "Admin", //ROLE.ADMIN
    nickname: "Vitinho",
    permission: true
}

type PersonNormal = Tperson & NormalAccount

const usuarioNormal: PersonNormal = {
    id: 100,
    name: "laila",
    email: "lala@email.com",
    password: "88821",
    role: "Admin", //ROLE.ADMIN
    nickname: "lao",
    permission: true
}


// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

const arrayPersonRole: Array <PersonAdmin | PersonNormal> = [usuarioAdmin, usuarioNormal]


