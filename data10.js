

  const fs = require("fs")

  const addPerson = (id , fname , lname , city , age) => {
       const allData = loadInfo()

      const duplicatedData =  allData.filter((obj)=>{
        return obj.id === id
      })
      if(duplicatedData.length == 0){
        allData.push({
          id : id,
          fname : fname,
          lname : lname,
          city : city,
          age : age
        })
        savealldata(allData)
      }else{
        console.log('Error Dublicated Data')
      }
  }

//////////////////////////////////////////////

  const loadInfo = () => {
    try { 
        const dataJson = fs.readFileSync("data10.json").toString()
        return  JSON.parse(dataJson)
    }
    catch {
        return []
    }
     
  }

//////////////////////////
 
  const savealldata = (allData) => {
     const saveallDataJson  = JSON.stringify(allData)
     fs.writeFileSync("data10.json" , saveallDataJson)
  }

///////////////////////////////////////////////////////////////////////


const deleteData = (id)=>{
  const allData = loadInfo()

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id
  })

  savealldata(dataToKeep)

} 
////////////////////////////////////////////

//to read data 

const readData = (id) =>{
  const allData = loadInfo()
  const itemNeeded = allData.find((obj) =>{
    return obj.id == id
  })
  //console.log(itemNeeded)
  if(itemNeeded){
    console.log(itemNeeded)
  }else{
    console.log('ID Needed Not Found')
  }
}

/////////////////////////
//list
    const listData = () =>{
      const allData = loadInfo()
      allData.forEach(obj => {
        console.log(obj.fname,obj.city)         
      })
      
    }

//////



module.exports = {
    addPerson,
    deleteData,
    readData ,
    listData
}