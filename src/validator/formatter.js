const name=require('../logger/logger')
const s1='                  >>FunctionUp         ';
const s2='>> PLUTONIUM     ->'
const s3= ".. ''+name.myName+'...Cohort.....";
const stringTrim=()=>{console.log(s1.trim())};
const stringToLowerCase=()=>{console.log(s2.toLowerCase())};
const stringToUpperCase=()=>{console.log(s3.toUpperCase())};

module.exports.trim=stringTrim;
module.exports.toLowerCase=stringToLowerCase;
module.exports.toUpperCase=stringToUpperCase;