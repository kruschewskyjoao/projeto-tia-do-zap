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
   it('Com o argumento vazio, a função fetch deve ser chamada', async () => {
     await gettingData();
     expect(fetch).toHaveBeenCalled();
     })
 })
 
 describe('Teste a função createKitty', () => {
   it('Testa se ol tem 6 filhos', async () => {
     const gData = await gettingData()
     await createKitty(gData);
     expect(ol.children).toHaveLength(6);
   })
 })

