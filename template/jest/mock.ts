/* This is the file where you can mock specific modules for jest testing
*/

export default {}
jest.mock('weather', () => ({
  doesItRain: jest.fn().mockReturnValue(true)
 }),
  { virtual: true }
 )
