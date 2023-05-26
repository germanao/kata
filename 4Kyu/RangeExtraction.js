function solution(list){
  
  const handleArrToString = (list) => {
    return list.length >= 3 ? `${list[0]}-${list[list.length -1]}` : list.length == 2 ? `${list[0]},${list[1]}` : list[0]
  }
  
  let buf = ''
  list = Array.from(new Set(list)).map(String)
  
  while(list.length){
    let ind = list.map(Number).findIndex((x,i) => x + 1 != list[i+1])
    if(ind < 0) return list[0] + '-' + list[list.length - 1]
    
    buf = buf + (buf == '' ? '' : ',') + handleArrToString(list.splice(0, ind + 1))
  }
  return buf
}