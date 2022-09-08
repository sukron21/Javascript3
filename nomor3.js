// Buatlah 2 program bebas dengan menggunakan promise seperti
// soal nomor 1

// const cekHaAnggotaKelas = (Nama)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const dataNama =['Ainur','alfath','brandon','ichsan','iqbal','furqon','reza','rhefa','taufik','vicko']
//             let test =dataNama.find((item)=>{
//                 return item==Nama
//             })  
//             if(test){
//                 resolve(`Atas nama ${test} mengikuti batch ke 5`)
//             }else{
//                 reject(new Error('Maaf nama tersebut tidak mengikuti Batch ke 5'))
//             }
//         },3000)
//     })
// }
// cekHaAnggotaKelas('Ainur')
    // .then((result)=>{
    //     console.log(result);
    // })
    // .catch((err)=>{
    //     console.log(err.message);
    // });



const cekBilanganGG = (angka)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (angka % 2==0){
                resolve(` ${angka} merupakan bilangan genap`)
            }else{
                reject(new Error(`${angka} merupakan bilangan ganjil`))
            }
        },3000)
    })
}
cekBilanganGG(13)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
});