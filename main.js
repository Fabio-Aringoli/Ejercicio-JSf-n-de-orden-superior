//Devolver un nuevo array con las cervezas que no excedan el nivet etilico (abv)



//Ejercicio 1

/* function filtrarCervezasPorAlcohol(array, nivelAlcohol) {
            //filtramos el array, devolviendo al objeto (cerveza).abv (nivelDeAlcohol)
            //Agregamos .map al resultado y devolvemos el objeto (hijo de beer) y un nuevo array con sus datos "extraidos"
    return array.filter((cerveza) => cerveza.abv <= nivelAlcohol).map((cerveza) => ({
        nombre: cerveza.name,
        alcohol: cerveza.abv,
        amargor: cerveza.ibu
      }))
    }
filtrarCervezasPorAlcohol(beers, 6) */

    
//Ejercicio 2

/* function obtenerCervezasMasAlcoholicas(array) {
    array.sort((a, b) => b.abv - a.abv)
    return array.slice(0, 10)
  }
  const cervezasMasAlcoholicas = obtenerCervezasMasAlcoholicas(beers)
(cervezasMasAlcoholicas(beers)) */


//Ejercicio 3

/* function obtenerCervezasMenosAmargas(array) {
    array.sort((a, b) => b.ibu - a.ibu)
    return array.slice(0, 10)
  }
  const cervezas = beers
  const cervezasMenosAmargas = obtenerCervezasMenosAmargas(cervezas)
(cervezasMenosAmargas(beers)) */


//Ejercicio 4

                                        
/* function ordenarCervezasPorPropiedad(array, prop, bool) {
    array.sort((a, b) => {
      if (bool) {
        return a[prop] - b[prop];
      } else {
        return b[prop] - a[prop];
      }
    });
    
    return cervezas.slice(0, 10);
  }

  const cervezas = beers

const cervezasOrdenadas = ordenarCervezasPorPropiedad(cervezas, 'propiedad', true);
console.log(cervezasOrdenadas); */


//Ejercicio 5

function renderizarTablaCervezas(cervezas) {
    let html = `
      <table>
        <tr>
          <th>Name</th>
          <th>ABV</th>
          <th>IBU</th>
        </tr>`;
  
    for (const cerveza of cervezas) {
      html += `
        <tr>
          <td>${cerveza.name}</td>
          <td>${cerveza.abv}</td>
          <td>${cerveza.ibu}</td>
        </tr>`;
    }
  
    html += `
      </table>`;
  
    return html;
  }

  const cervezas = beers
    const tablaHTML = renderizarTablaCervezas(cervezas);
    document.getElementById("tablaCervezas").innerHTML = tablaHTML;