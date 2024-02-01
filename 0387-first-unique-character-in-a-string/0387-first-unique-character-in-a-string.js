/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
        let charObj = {}
  
        if(s.length === 1){
            return 0
        }
        for(const c of s){
            if(charObj.hasOwnProperty(c)){
                charObj[c] += 1
            }else{
                charObj[c] = 1
            }
        }
    
    
        for(const key in charObj){
          if(charObj[key]=== 1){
              return s.indexOf(key) 
            }
    }
    
    
    return -1
        
        
};