function reverseNumber(n){
  //coding here...
  let letterArr = n.split('')
  
  let finalWord = ''
  
  if (letterArr[0] == '-'){
  	finalWord = letterArr[0]
    letterArr.shift()
  }
  
  let tempArr = []

  let prevElement = null
  
  let orderType = null
  
  letterArr.forEach((element, index) => {
    if(!orderType)
    {
      if(element != letterArr[index + 1])
      {
        orderType = element < letterArr[index + 1] ? 'Asc' : 'Des' 
      }
     	
    }
    
    if(!prevElement)
    {
    	prevElement = element
      tempArr.push(element)
      return
    }
    
    if(+element == +prevElement)
    {
    	tempArr.push(element)
      return
    }
    
    if(orderType == 'Asc')
    {
      if(+prevElement > +element )
      {   
        	finalWord = finalWord.concat(tempArr.reverse().join(''))
          tempArr   = []
        	tempArr.push(element)
      	  if(element != letterArr[index + 1])
          {
            orderType = element < letterArr[index + 1] ? 'Asc' : 'Des' 
          }else{orderType = null}
          	prevElement = element
          	return 
      }
      prevElement = element
      tempArr.push(element)
      return
    }
    
    if(orderType == 'Des')
    {
      if(+prevElement < +element)
      {   
        	finalWord = finalWord.concat(tempArr.reverse().join(''))
          tempArr   = []
        	tempArr.push(element)
      	if(element != letterArr[index + 1]){
        orderType = element < letterArr[index + 1] ? 'Asc' : 'Des' 
      }else{orderType = null}
        prevElement = element
        return 
      }
      prevElement = element
      tempArr.push(element)
      return
    }
  })
  
  if(tempArr.length > 0)
  {
    finalWord = finalWord.concat(tempArr.reverse().join(''))
  }
  
  return BigInt(finalWord).toString()
}