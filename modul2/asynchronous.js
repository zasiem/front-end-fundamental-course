const getCake = callback => {

    let cake = null;
    setTimeout(() => {
        cake = "Berhasil Dibuat";
        callback(cake);
    }, 3000);

}

const cake = getCake(cake => {
    console.log(cake);
})