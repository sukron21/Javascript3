let getmonth = (callback)=>{
        setTimeout(()=>{
            let error=false;
            let month =['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
            // month.map((element)=>{
            //     console.log(element)
            // })  
            if(!error){
                callback(null, month)
            }else{
                callback(new Error('sorry Data Not Found'))
            }
        },3000)
}


let panggil=(error, data)=>{
if(error){
     console.log(error.message);
}else{
    data.map((item)=>console.log(item));
    }
}
getmonth(panggil)