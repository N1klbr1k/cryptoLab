const encode = str => {

    let result = [];
    for(let i = 0; i < str.length; i ++){
      //console.log(str[i])
    result.push(str.charCodeAt(str[i/(i+1)]));   
    }
    return result;
  }
  console.log(encode('I love cryptography!'))
  
  
  
  
  let test = encode('I love cryptography!')
  
  
  const decode = arr => {
   let result = [];
   
    for(let i = 0; i < arr.length; i++){
      result.push(String.fromCharCode(arr[i]*(i+1)))
    }
    return result.join('')
  }
  console.log(decode(test))