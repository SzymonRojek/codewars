



// Set Alarm

/* 

Description:
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false setAlarm(false, true) -> false setAlarm(false, false) -> false setAlarm(true, false) -> true  */


1. 
function setAlarm(employed, vacation){
  if (employed == true && vacation == true){
             return false;}
         if(employed == true && vacation == false)  {
             return true;}
         if(employed == false && vacation == false)  {
             return false;}
         if(employed == false && vacation == true)  {
             return false;}
         else{
             return false;}
 };
 


 2.
 function setAlarm(employed, vacation){
  return employed === true && vacation === false ? true : false
  
  };



  3.
  const setAlarm = (e, v) => e && !v;


  4.
  function setAlarm(employed, vacation){
    return employed !== vacation && employed ? true : false; 
  };