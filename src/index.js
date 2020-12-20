const cities = ['Ciudad de Mexico', 'Bogota', 'Buenos Aires', 'Lima'];

const randomString = ( ) =>{
    const string = cities[Math.floor(Math.random()*cities.length)];
    return string;

};

const reverString = (str, callback) => {
    callback(str.split('').reverse().join(''))
};

module.exports = randomString;
