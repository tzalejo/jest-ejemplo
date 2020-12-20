const randomStrings = require('../index');

describe('Probando la funcionalidad index', () => {
    test('Probar la funcionalidad', () => {
    	expect(typeof (randomStrings())).toBe('string');
    });

    test('Comprobando que no existe uan ciudad', () => {
	expect(randomStrings()).not.toMatch(/Cordoba/);
    });

    it('Comprobando con it si exite una ciudad', () => {
//	const cities = ['Ciudad de Mexico', 'Bogota', 'Buenos Aires', 'Lima'];
//	expect(randomStrings()).toBe(cities);
    });

});
