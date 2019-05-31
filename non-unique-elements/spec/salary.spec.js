function getDate(day, month) {
  return new Date(`${day} ${month} 2019 07:00:00`)
}

function getDaysInMonth(month) {
  return new Date(year, 2019, 0).getDate()
}

function getBudgetFrom(startDate, endDate) {
  const budgetPerMonth = {
    3: 31,
    4: 3000,
    5: 3100,
    6: 3000,
    7: 31
  }
  if (endDate.getTime() - startDate.getTime() < 0) return 'Error'
  return 3
}

describe('getBudgetFrom(startDate, endDate)', function() {
  it('should return Error invalid input when endDate is before startDate', function() {
    const startDate = getDate(4, 'July')
    const endDate = getDate(2, 'July')
    expect(getBudgetFrom(startDate, endDate)).toEqual('Error')
  })
  it('should return budget 3 when date range between 02 July and 04 July', function() {
    const startDate = getDate(2, 'July')
    const endDate = getDate(4, 'July')
    expect(getBudgetFrom(startDate, endDate)).toEqual(3)
  })
  it('should return budget 3 when date range between 02 July and 10 July', function() {
    const startDate = getDate(2, 'July')
    const endDate = getDate(10, 'July')
    expect(getBudgetFrom(startDate, endDate)).toEqual(9)
  })
  // it('should return 1104 when budget calculate in 2 months from 20 June to 4 July', function() {
  //   const startDate = getDate(20, 'June')
  //   const endDate = getDate(04, 'July')
  //   expect(getBudgetFrom(startDate, endDate)).toEqual(1104)
  // })
})