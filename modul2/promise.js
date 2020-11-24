const state = {
    'is_machine_ready': true,
    'stock': {
        'arabika': 50,
        'luwak': 30,
    }
}

const getSeeds = (type, miligrams) => {

    return new Promise((resolve, reject) => {
        let stock = state.stock[type];
        if (stock >= miligrams) {
            resolve(`Berhasil mengambil biji ${type}`);
        } else {
            reject(`Stok biji ${type} tidak cukup`)
        }
    });

}

const makeCoffe = (type) => {
    return new Promise((resolve, reject) => {
        if (state.is_machine_ready) {
            resolve(`Berhasil membuat kopi ${type}`);
        } else {
            reject(`Gagal membuat kopi ${type}`);
        }
    })
}

const serveToTable = (coffee) => {
    return new Promise((resolve, reject) => {
        resolve(`kopi ${coffee} berhasil dikirimkan ke meja`);
    });
}

//promise then
getSeeds('arabika', 30)
    .then(makeCoffe)
    .then(serveToTable)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

//async and await
async function processCoffe(seed, stock) {
    try {
        const seeds = await getSeeds(seed, stock);
        const coffe = await makeCoffe(seeds);
        const served = await serveToTable(coffe);
        console.log(served);
    } catch (error) {
        console.log(error);
    }
}

processCoffe('arabika', 30);