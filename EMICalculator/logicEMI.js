var data_PerMonth =[];
function goat(){

     var principal=document.getElementById("DXC").value;
     var rate=document.getElementById("DXC1").value;
     var time=document.getElementById("DXC2").value;
     principalPattern= /^[0-9]+$/;
     ratePattern= /^[0-9]+$/;
     timepattern= /^[0-9]+$/;
    
     if(principal==""){
        alert("Enter Principal Value");
    }
    else if(!principalPattern.test(principal)){
        alert("privide numeric values plz");
    }else{
        
    }

    if(rate==""){
        alert("Enter Rate value");   
    }
    else if (!ratePattern.test(rate)){
        alert("privide valid Rate value");
    }
    else{
         
    }

    if(time==""){
        alert("pleas provide values");
    }else if(timepattern.test(time)){
        
    }else{
        alert("enter valid time");
    }
    principal=1*principal;
    rate=1*rate;
    time=12*time;
    
    var rate_per_month=rate/1200;


    var i=time;
    var nc=0;
    while(i>0){
        var x=principal*rate_per_month* Math.pow(rate_per_month+1,i);
        var y= Math.pow(rate_per_month+1,i)-1;
        var total=x/y;
        var b=principal*rate_per_month;
        var z=total-b;
         
    var data_P={Month: nc , EMI: total , PrincipalGiven: z, Interest: b, Principal_Remaining: principal};
    principal=principal-z;
    data_PerMonth.push(data_P);
    nc++;
    i--;
    }
    var f=0,temp=0;
    while(f<data_PerMonth.length){
        temp=temp+data_PerMonth[f].EMI;
        f++;
}
    document.write("Total EMI....     RS .....  :"+temp);
    document.write("<br/>");
     document.write("<br/>");
     document.write("<br/>");
     document.write("<br/>");
    console.log(data_PerMonth);
    for(var j=0;j<data_PerMonth.length;j++){
        var y=`<tr>
        <td>"Month    :"${data_PerMonth[j].Month}</td>
        <td>" EMI    :"${data_PerMonth[j].EMI}</td>
        <td>" PrincipalGiven    :"${data_PerMonth[j].PrincipalGiven}</td>
        <td>" Interest    :"${data_PerMonth[j].Interest}</td>
        <td>" Principal_Remaining    :"${data_PerMonth[j].Principal_Remaining}</td>
    </tr>`
     document.write(y);
     document.write("<br/>");
     document.write("<br/>");
     document.write("<br/>");
    }

}