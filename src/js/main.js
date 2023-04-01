var usuarios = [
    {
        "id": 1,
        "nombre": "Mark Junior Romero Tovar",
        "celular": 3012046175,
        "cedula": 1002465246,
        "correo": "Mtovar@cuc.edu.co",
        "contraseña": "12345",
        "admin": true
    },
    {
        "id": 2,
        "nombre": "Diego Benavides",
        "celular": 3015047175,
        "cedula": 1202455246,
        "correo": "diego@cuc.edu.co",
        "contraseña": "12345",
        "admin": false
    },
    {
        "id": 3,
        "nombre": "Antonio Jesus",
        "celular": 30132546175,
        "cedula": 1002465246,
        "correo": "Antonito@cuc.edu.co",
        "contraseña": "12345",
        "admin": true
    }
];

//Funcion para ocultar home y mostrar crud
const viewCrud = () => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('crud').style.display = 'flex';
}


//Funcion para ocultar crud y mostrar home
const viewHome = () => {
    document.getElementById('home').style.display = 'flex';
    document.getElementById('crud').style.display = 'none';
}

//Funcion para limpiar el form
const cleanForm = () => {
    document.getElementById('name').value = "";
    document.getElementById('celular').value = "";
    document.getElementById('cedula').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('contraseña').value = "";
    document.getElementById('admin').checked = "";
}


//Funcion para lanzar el formulario
const saveUser = async () =>  {
    let name = document.getElementById('name').value;
    let celular = document.getElementById('celular').value;
    let cedula = document.getElementById('cedula').value;
    let correo = document.getElementById('correo').value;
    let contraseña = document.getElementById('contraseña').value;
    let admin = document.getElementById('admin').checked;

    if(correo.includes("@") && correo.includes(".")){

        if(name != '' && celular != '' && cedula != '' && correo != '' && contraseña != ''){

            let usuario = {
                "id": usuarios.length + 1,
                "nombre": name,
                "celular": celular,
                "cedula": cedula,
                "correo": correo,
                "contraseña": contraseña,
                "admin": admin
            }

            await usuarios.push(usuario);
            cleanForm()
            viewUsers();

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se guardo el usuario correctamente!',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan campos por llenar!',
            });
        }

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Correo Invalido!',
        });
    }
    
}


//Funcion para mostrar los usuarios en la tabla
const viewUsers = () => {
    
    let table = "";

    for (let i = 0; i < usuarios.length; i++) {

        table = table + `
        
        <tr class="text-center">
            <th scope="row ">${usuarios[i].id} </th>
            <td> ${usuarios[i].nombre} </td>
            <td> ${usuarios[i].celular} </td>
            <td> ${usuarios[i].cedula} </td>
            <td> ${usuarios[i].correo} </td>
            <td> ${usuarios[i].contraseña} </td>
            <td> ${usuarios[i].admin} </td>
        </tr>
        
        `;
        
    }
    const wrapp = document.querySelector("#wrap-table");
    wrapp.innerHTML = table;
    

}



//MAIN
viewUsers();