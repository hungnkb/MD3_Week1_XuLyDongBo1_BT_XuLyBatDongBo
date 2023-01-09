let buyCar = (budget) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (budget >= 10000) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
        console.log('Welcome to Car showroom');
    })
}

buyCar(10000)
    .then(() => console.log('Enough to buy this car'))
    .catch(() => console.log('Not enough to buy this car'))
