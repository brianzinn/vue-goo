import SceneComponent from '../src/vue-goo'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('SceneComponent is instantiable', () => {
    expect(new SceneComponent()).toBeInstanceOf(SceneComponent)
  })
})
