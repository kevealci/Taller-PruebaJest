import * as app from './app';
import * as math from './math';

/* 
----------------------Descripción-----------------------------------
-Primero se asigna la funcion add en la constante originalAdd
-Luego se realiza un mock con la implementación original de la función
-Se realiza la operacion de lo que se espera y luego otra
que revisa que al ejecutarse la función recibió 1 y 2 como argumento. 
-Después se cambia la implementación de la función con el método de jest mockImplementation y ahora solo retorna mock.
-Se vuelve a hacer las operaciones del anterior caso.
-Se reestablece la implementación original de la función y se ejecuta
la operación de esperar como resultado 3 al pasarse como argumento
1 y 2.
*/

test('calls math.add', () => {
  // store the original implementation
  const originalAdd = math.add;

  // mock add with the original implementation
  math.add = jest.fn(originalAdd);

  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  // override the implementation
  math.add.mockImplementation(() => 'mock');

  expect(app.doAdd(1, 2)).toEqual('mock');
  expect(math.add).toHaveBeenCalledWith(1, 2);

  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});
