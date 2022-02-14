/**
 * @jest-environment jsdom
 */
 const fetch = require('node-fetch');
 const { gettingData,
   createKitty,
   createClickImage,
   clearText,
   changeColorBlue,
   changeColorPurple,
   changeColorGreen,
   changeColorRed,
   changeColorYellow,
   changeColorWhite,
   changeFont,
   changeFont2,
   changeFont1,
   changeFont3,
   changeSize1,
   changeSize2,
   changeSize3,
   changeSize4, } = require('./script');
 
 
 describe('Teste a função gettingData', () => {
   it('Verifica se gettingData é uma função', () => {
    expect(typeof gettingData).toBe('function');
   });
   
   it('Verifica se createKitty é uma função', () => {
    expect(typeof createKitty).toBe('function');
   });
   
   it('Verifica se createClickImage é uma função', () => {
    expect(typeof createClickImage).toBe('function');
   });
   
   it('Verifica se clearText é uma função', () => {
    expect(typeof clearText).toBe('function');
   });
   
   it('Verifica se changeColorBlue é uma função', () => {
    expect(typeof changeColorBlue).toBe('function');
   });
   
   it('Verifica se changeColorPurple é uma função', () => {
    expect(typeof changeColorPurple).toBe('function');
   });
   
   it('Verifica se changeColorGreen é uma função', () => {
    expect(typeof changeColorGreen).toBe('function');
   });
   
   it('Verifica se changeColorRed é uma função', () => {
    expect(typeof changeColorRed).toBe('function');
   });
   
   it('Verifica se changeColorYellow é uma função', () => {
    expect(typeof changeColorYellow).toBe('function');
   });
   
   it('Verifica se changeColorWhite é uma função', () => {
    expect(typeof changeColorWhite).toBe('function');
   });
   
   it('Verifica se changeFont é uma função', () => {
    expect(typeof changeFont).toBe('function');
   });
   
   it('Verifica se changeFont1 é uma função', () => {
    expect(typeof changeFont1).toBe('function');
   });

   it('Verifica se changeFont2 é uma função', () => {
    expect(typeof changeFont2).toBe('function');
   });

   it('Verifica se changeFont3 é uma função', () => {
    expect(typeof changeFont3).toBe('function');
   });

   it('Verifica se changeSize1 é uma função', () => {
    expect(typeof changeSize1).toBe('function');
   });

   it('Verifica se changeSize2 é uma função', () => {
    expect(typeof changeSize2).toBe('function');
   });

   it('Verifica se changeSize3 é uma função', () => {
    expect(typeof changeSize3).toBe('function');
   });

   it('Verifica se changeSize4 é uma função', () => {
    expect(typeof changeSize4).toBe('function');
   });
 })
