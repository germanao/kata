function generateHashtag (str) {
  if (str.trim() == '') return false
 
  str = '#'.concat(str.split(' ')
                      .map((ele) => ele.charAt(0)
                           			   .toUpperCase()
                           			   .concat(ele.slice(1)))
                      .join(``))
  return str.length > 140 ? false : str
}