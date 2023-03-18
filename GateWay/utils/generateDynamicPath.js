const generateDynamicPath =(dataArray) =>{
    let mainString = ""
    dataArray.map((ele)=>{mainString+= `${ele}/`})
    return mainString
}

module.exports = generateDynamicPath