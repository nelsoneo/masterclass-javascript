const ramdomNumber = (number) => Math.floor(Math.random() * number)

const calculateLoteria = (qtySorteo, qtyNumber) => {
  let sorteoDay = new Set();
  
  do {
    let numR = 0 | ramdomNumber(qtyNumber)
    if (numR > 0) sorteoDay.add(numR)
  } while (sorteoDay.size < qtySorteo)

  return sorteoDay
}


console.log(calculateLoteria(6,60))