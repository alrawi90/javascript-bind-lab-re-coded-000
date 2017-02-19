const digitalClock={
  time: Math.round(Date.now() / 1000),
  startTicking:function(){
    //setTimeout(this,1000)
      setInterval(() => this.time++, 1000);

  }
}
function censor(sub,str){
  return str.replace(new RegExp(sub, 'g'), "BLEEP");

}
const violenceCensor=censor.bind(null,"violence")
const drugsCensor=censor.bind(null,"drugs")
