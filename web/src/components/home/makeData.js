import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const randomStartDate = () => {
  const start = new Date(2018, 0, 1)
  const end = new Date(2019, 0, 1)
  const res = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return res.toLocaleDateString("en-US")
}

const randomEndDate = () => {
  const start = new Date(2019, 1, 1)
  const end = new Date(2020, 0, 1)
  const res = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return res.toLocaleDateString("en-US")
}


const newCase = (d) => {
  const statusChance = Math.random()
  const startDate = randomStartDate()
  const endDate = randomEndDate()
  return {
    id: d + 1,
    firstName: namor.generate({ words: 1, saltLength: 0 }),
    lastName: namor.generate({ subset: "manly" ,  words: 1, saltLength: 0 }),
    dateOpen: startDate,
    dateClose: endDate,
    phone: Math.floor(Math.random() * 1000000000),
    status:
      statusChance > 0.66
        ? 'in progress'
        : statusChance > 0.33
        ? 'pending'
        : 'finished',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newCase(d),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
