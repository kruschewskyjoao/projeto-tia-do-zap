const memeCats = require('./script');

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
