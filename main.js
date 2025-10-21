let dueños = [];
let mascotas = [];

const generarId = () => Date.now() + Math.floor(Math.random() * 1000);
const mostrarFormulario = (id) => {
  document.querySelectorAll("form").forEach(f => f.style.display = "none");
  document.getElementById(id).style.display = "block";
};

const registrarDueño = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombreDueño").value.trim();
  const cedula = document.getElementById("cedulaDueño").value.trim();
  const telefono = document.getElementById("telefonoDueño").value.trim();
  const correo = document.getElementById("correoDueño").value.trim();

  if (!nombre || !cedula || !telefono || !correo) {
    return alert("Todos los campos son obligatorios.");
  }
  
  if (telefono <= 0) {
    return alert("El numero telefonico no puede ser negativo");
  }
  
  if (cedula <= 0) {
    return alert("La cedula no es valida");
  }

  setTimeout(() => {
    dueños.push({ id: generarId(), nombre, cedula, telefono, correo });
    alert("Dueño registrado exitosamente.");
    e.target.reset();
  }, 1500);
};

const registrarMascota = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombreMascota").value.trim();
  const especie = document.getElementById("especieMascota").value.trim();
  const edad = parseFloat(document.getElementById("edadMascota").value);
  const peso = parseFloat(document.getElementById("pesoMascota").value);
  const estado = document.getElementById("estadoMascota").value.trim();
  const cedulaDueño = document.getElementById("cedulaMascotaDueño").value.trim();

  if (!nombre || !especie || !estado || edad <= 0 || peso <= 0) {
    return alert("Datos inválidos.");
  }

  setTimeout(() => {
    const dueño = dueños.find(d => d.cedula === cedulaDueño);
    if (!dueño) return alert("Dueño no encontrado.");

    mascotas.push({ id: generarId(), nombre, especie, edad, peso, estado, dueñoId: dueño.id });
    alert("Mascota registrada con éxito.");
    e.target.reset();
  }, 2000);
};

// Listar mascotas
const listarMascotas = () => {
  if (mascotas.length === 0) return alert("No hay mascotas registradas.");
  console.clear();
  mascotas.forEach(m => {
    console.log(`${m.nombre} - ${m.especie} - Edad: ${m.edad} años - Peso: ${m.peso} kg - Estado: ${m.estado}`);
  });
};


const buscarMascotaPorNombre = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("buscarNombre").value.trim();
  new Promise((resolve) => {
    setTimeout(() => {
      const resultado = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
      resolve(resultado);
    }, 1500);
  }).then(resultado => {
    if (resultado) {
      alert(`Mascota encontrada: ${resultado.nombre} - Estado: ${resultado.estado}`);
    } else {
      alert("Mascota no encontrada.");
    }
    e.target.reset();
  });
};

const actualizarSalud = async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("saludNombre").value.trim();
  const nuevoEstado = document.getElementById("nuevoEstado").value.trim();
  await new Promise(resolve => setTimeout(resolve, 1000));

  const mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
  if (mascota) {
    mascota.estado = nuevoEstado;
    alert("Estado actualizado.");
  } else {
    alert("Mascota no encontrada.");
  }
  e.target.reset();
};

const eliminarMascotaPorNombre = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("eliminarNombre").value.trim();
  new Promise((resolve) => {
    setTimeout(() => {
      const index = mascotas.findIndex(m => m.nombre.toLowerCase() === nombre.toLowerCase());
      resolve(index);
    }, 2000);
  }).then(index => {
    if (index !== -1) {
      mascotas.splice(index, 1);
      alert("Mascota eliminada.");
    } else {
      alert("Mascota no encontrada.");
    }
    e.target.reset();
  });
};


const verMascotasDeDueño = async (e) => {
  e.preventDefault();
  const cedula = document.getElementById("cedulaConsulta").value.trim();
  await new Promise(resolve => setTimeout(resolve, 2000));

  const dueño = dueños.find(d => d.cedula === cedula);
  if (!dueño) return alert("Dueño no encontrado.");

  const mascotasDueño = mascotas.filter(m => m.dueñoId === dueño.id);
  if (mascotasDueño.length === 0) {
    alert("Este dueño no tiene mascotas registradas.");
  } else {
    console.clear();
    mascotasDueño.forEach(m => {
      console.log(`${m.nombre} - ${m.especie} - Estado: ${m.estado}`);
    });
  }
  e.target.reset();
};