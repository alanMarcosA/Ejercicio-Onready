var concesionaria = {
  vehiculos: [],
  cargarVehiculos: () => {
    if (concesionaria.vehiculos.length == 0) {
      concesionaria.cargarAuto("Peugeot", "206", 4, 200000.0);
      concesionaria.cargarMoto("Honda", "Titan", "125c", 60000.0);
      concesionaria.cargarAuto("Peugeot", "208", 5, 250000.0);
      concesionaria.cargarMoto("Yamaha", "YBR", "160c", 80500.5);
    }
  },
  cargarAuto: (marca, modelo, puertas, precio) =>
    concesionaria.vehiculos.push({
      Marca: marca,
      Modelo: modelo,
      Puertas: puertas,
      Precio: precio.toFixed(2),
    }),
  cargarMoto: (marca, modelo, cilindrada, precio) =>
    concesionaria.vehiculos.push({
      Marca: marca,
      Modelo: modelo,
      Cilindrada: cilindrada,
      Precio: precio.toFixed(2),
    }),
  imprimir: () => {
    concesionaria.vehiculos.forEach((e) => {
      let mensaje = "";
      let keys = Object.keys(e);
      keys.forEach((k) => {
        mensaje += `${k}: ${e[k]} // `;
      });
      console.log(mensaje.slice(0, -3));
    });
  },
  imprmirEsp: () => {
    concesionaria.ordenarPorPrecio();
    console.log(
      `Vehiculo más caro: ${concesionaria.vehiculos[0].Marca} ${concesionaria.vehiculos[0].Modelo}`
    );
    console.log(
      `Vehiculo más barato: ${
        concesionaria.vehiculos[concesionaria.vehiculos.length - 1].Marca
      } ${concesionaria.vehiculos[concesionaria.vehiculos.length - 1].Modelo}`
    );
    concesionaria.vehiculos.forEach((e) => {
      if (e.Modelo.includes("Y")) {
        console.log(
          `Vehículo que contiene en el modelo la letra ‘Y’: ${e.Marca} ${
            e.Modelo
          } ${e.Puertas ? e.Puertas : e.Cilindrada} $${e.Precio}`
        );
      }
    });
  },
  imprimirOrd: () => {
    concesionaria.ordenarPorPrecio();
    console.log("Vehículos ordenados por precio de mayor a menor:");
    concesionaria.vehiculos.forEach((e) =>
      console.log(`${e.Marca} ${e.Modelo}`)
    );
  },
  ordenarPorPrecio: () =>
    concesionaria.vehiculos.sort((a, b) => {
      return b.Precio - a.Precio;
    }),
};
concesionaria.cargarVehiculos();
concesionaria.imprimir();
console.log("=============================");
concesionaria.imprmirEsp();
console.log("=============================");
concesionaria.imprimirOrd();
