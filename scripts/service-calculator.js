function calculate(){var e=document.getElementById("ipt1").value,t=document.getElementById("ipt2").value,r=perItemCharge(t),n=findCharge(e,t),o=myTurnout(e,t);alert("Amount of Items : "+e+"\n\rPrice per raw item: "+t+"gp\n\rPrice per finished item: "+r+"gp\n\rHow much to charge: "+n+"gp\n\rLabor cost: "+o+"gp")}function perItemCharge(e){let t=e,r=void 0,n=void 0;return t-=r=.1*t,t*=1,t+=n=.25*t,t=Math.trunc(t)}function findCharge(e,t){let r=e,n=void 0,o=void 0;return r-=n=.1*r,r*=t,r+=o=.25*r,r=Math.trunc(r)}function myTurnout(e,t){let r=e,n=void 0,o=void 0;return r-=n=.1*r,r=o=.25*(r*=t),r=Math.trunc(r)}console.log("Type help() for available options.");
