const myFizzBuzz = require('./ex02.js');

describe('testa a funcao myFizzBuzz', () => {
  it('deve retornar fizzbuzz se receber o number 15', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  it('deve retornar fizz se receber o number 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })
  it('deve retornar buzz se receber o number 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })
  it('deve retornar o próprio numero se receber 2', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  })
  it('deve retornar false se nao receber um número', () => {
    expect(myFizzBuzz('teste')).toEqual(false);
  })
})

