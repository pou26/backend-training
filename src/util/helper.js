const batch=require('../introduction/intro')
let day=new Date();
let date=day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate();
let printDate=function(){
    console.log(date)
}
let printMonth=function(){
    const month=(day.getMonth()+1);
    const arr=['jan','feb','march','april','may','june','july','august','september','october','november','december']
    console.log('>>current month is : ',arr[month-1])
}
let getBatchInfo=function(){
    console.log(batch.name+'W3D3,Node.js')
}
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;