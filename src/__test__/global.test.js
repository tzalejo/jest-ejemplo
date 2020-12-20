const text = 'hola Mundo jest';
const fruits = ['manzana', 'banana', 'melon'];

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('Tenemos una Banana???', () => {
    expect(fruits).toContain('banana');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

test('Verdadero y Falso', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
});

const reverString = (str, callback) => {
    callback(str.split('').reverse().join(''))
};

test('Probar un callback', () => {
    reverString('Hola', (str)=>{
	expect(str).toBe('aloH');
    })
});


const reverseString2 = str => {
    return new Promise((resolve, reject) => {
	if (!str) {
	    reject(Error('Error'));
	}
	resolve(str.split('').reverse('').join(''))
    })
};

test('Provando una promesa', () => {
    return reverseString2('Hola')
    	.then(string => {
	    expect(string).toBe('aloH');
	});
});


test('Probar async/await', async() => {
    const string = await reverseString2('Hola');
    expect(string).toBe('aloH');
});

// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las prueba'));
// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las prueba'));



