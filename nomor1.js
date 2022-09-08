const cekHariKerja = (day)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay =['senin','selasa','rabu','kamis','jumat']
            let cek =dataDay.find((item)=>{
                return item==day
            })  
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}
cekHariKerja('minggu')
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
});
// async function cobaTugas(hari){
//     try{   
//         const coba= await cekHariKerja(hari);
//         console.log(coba);
//     } catch (err) {
//         console.error(err.message);
//     }
// }
// console.log(cobaTugas('minggu'))