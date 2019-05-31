describe('Non-unique Elements', function() {
  it('should return [1, 1, 1] when given value is [1, 1, 1]', function() {
    expect(nonUniqueElements([1, 1, 1])).toEqual([1, 1, 1])
  })

  it('should return [1, 1] when given value is [1, 1, 2]', function() {
    expect(nonUniqueElements([1, 1, 2])).toEqual([1, 1])
  })

})

function nonUniqueElements(listData) {
  returnList = []
  countElements = listData.length
  for (let index = 0; index < countElements; index++) {
    const temp = listData.shift()
    console.log('temp', temp)
    const isDuplicate = listData.some(el => el === temp)
    if(!isDuplicate){
      listData.splice(index, index + 1)
    }
    
  }
  // console.log(listData, listData.splice(0, 1))
  return listData
}