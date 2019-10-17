/* This is an example test please check the ./mock/jest
on how to mock a specific module for jest unit testing */
//@ts-ignore for non existing mocked module

import weatherProvider from 'weather'
export default function IsItRaining(): boolean {
  return weatherProvider.doesItRain()
}
