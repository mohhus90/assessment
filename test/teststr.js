function com(str){
    var strsp = str.split('=')
    var len1 = strsp[1].length
    var elerstr = strsp[4].split(' ')
    console.log(strsp)
    console.log(" length = " + len1  )
    console.log(elerstr)
}
com("code=3320 date=2017/09/19 value=42 name=H G T T G")