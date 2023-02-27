
const func = (dat) =>{
      const first = dat.slice(0, 3)
      const last =  dat.slice(-3)

      return first.concat(last).length < 3 ? dat : first + last
}

console.log(func("ops! I am damn"))