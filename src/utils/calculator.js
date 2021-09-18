const monedas = [
  {"nombre":"$10","peso":3.5, "valor":10, "imagen":""},
  {"nombre":"$50","peso":7.0, "valor":50, "imagen":""},
  {"nombre":"$100 mapuche","peso":7.58, "valor":100, "imagen":""},
  {"nombre":"$500","peso":6.5, "valor":500, "imagen":""},
  {"nombre":"$100 antigua","peso":9, "valor":100, "imagen":""},

]
/** *
Retorna numero de monedas y su valor en un pesaje de monedas comprobatorio.
P: peso en gramos de las monedas
M: array de tipos de monedas que pueden haber en un conjunto de monedas [prediccion si hay mas de 2.]
*/
const tolerancia = 0.5

const estimaMoneys = (peso, gramo_monedas) => {
  return peso / gramo_monedas
}

const calculaValor = (x,y,m1,m2) => {
  return x*m1+y*m2
}

const eAbsoluto = (v) => {
  return v - parseInt(v)
}


/** *
  Según la tara, el peso de las monedas, y la Moneda a calcular,
  determina la cantidad y el valor de dichas monedas.
*/

const y_cien = (peso, x) => {
  return (1/7.58)*(peso - 9 * x)
}

const x_cien = (peso, y) => {
  return (1/9)*(peso - 7.58 * y)
}

const calcularMonto = (tara, P, M) => {
  //verificación & transformación de unidades de medida
  P = P < 2.9 ? P*1000 : P
  tara = tara < 2.9 ? tara*1000 : tara

  const m_nombre = monedas[M].nombre
  const m_valor = monedas[M].valor
  const m_peso = monedas[M].peso

  P = Math.abs(P - tara)

  const _x = estimaMoneys(P, m_peso)
  const e_x = eAbsoluto(_x)

  if ( m_valor !== 100){
    if (e_x === 0 || -tolerancia <= e_x <= tolerancia) {
      return valorCondicionado(e_x,_x, m_valor, m_nombre)
    } else {
        const txt = `${parseInt(_x)} moneda(s) de ${m_nombre}`
        return [txt , parseInt(_x) * m_valor ]
    }
  }
  else
    {
      /*
        Para las dos monedas de $100, la fórmula lineal es
                        9*x + 7.58*y = Peso
        se trabaja con el despeje de x e y, luego  se busca la aproximación
        con el menor error, según una tolerancia de 0.1 .-
      */
      const tol = 0.1
      for (const i of Array(50).keys()) {
        let x_ = x_cien(P,i)
        let y_ = y_cien(P,i)
        const err_y_ = eAbsoluto(y_)
        const err_x_ = eAbsoluto(x_)

3
/8
        let y_ = y_cien(P,i)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ̣̣̣̣̣̣̣̣̣ µ
        if(err_y_ > -tol && err_y_ < tol && y_>-1) {
          return valorCien(i, -1, parseInt(y_), err_y_)
        }
        if(err_x_ > -tol && err_x_ < tol && x_>-1) {
          return valorCien(parseInt(x_), err_x_, i, -1)
        }<<<<<<<<<<
      }
      P = P + 0.1
      // si no se encuentra solución en 50 pasos,
      // aumentamos en 0.1 el peso entrante ( efectividad > 90% )
      for (const i of Array(50).keys()) {
        let x_ = x_cien(P,i)
        let y_ = y_cien(P,i)
        const err_y_ = eAbsoluto(y_)
        const err_x_ = eAbsoluto(x_)

        if(err_y_ > -tol && err_y_ < tol && y_>-1) {
          return valorCien(i, -1, parseInt(y_), err_y_)
        }
        if(err_x_ > -tol && err_x_ < tol && x_>-1) {
          return valorCien(parseInt(x_), err_x_, i, -1)
        }
      }

      alert("Sus monedas tienen scotchs o estan con peso extra / o su balanza está demasiado descalibrada")
      return(['*Mala medición, recalibre',0])
    }
    alert("Sus monedas tienen scotchs o estan con peso extra / o su balanza está demasiado descalibrada")
    return(['#Mala medición, recalibre', 0])
  }

  const valorCien = (x,ex,y,ey) => {
     return [`${x} moneda(s) antiguas y ${y} moneda(s) nuevas.`,calculaValor(x,y,100,100)]
  }

  /** *
    Por ajustes de ensayo y error, esta función  transforma la cantidad de
    monedas ya calculada, ajustandolo a un valor cercano a lo esperado.
    vs 1.0.5
  */
  const valorCondicionado = (e_, __x, valor, coin_name) => {
    if(e_ < 0) __x += tolerancia
    const x = parseInt(__x)
    return [Math.ceil(__x) + " moneda(s) de "+coin_name, x * valor]
  }


export default calcularMonto;
