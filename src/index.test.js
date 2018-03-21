/*
  eslint
    import/no-commonjs:0,
    fp/no-mutation:0,
    fp/no-unused-expression:0,
    better/explicit-return:0,
    fp/no-nil:0
 */
import swissKase, { swiss, kase } from './'
import { debug } from '@chantelle/util'
import { tap } from 'ramda'

describe('swiss kase', () => {
  test('exports correctly', () => {
    ;[
      kase,
      swiss,
      swissKase[String.fromCodePoint(128298)],
      swissKase[String.fromCodePoint(129472)],
    ].map(fn => expect(typeof fn).toBe('function'))
  })

  test('kase', () => {
    const VALUE = 'whatever'
    const NEEDLE = '$$$'
    expect(kase(NEEDLE)(VALUE)(NEEDLE)).toMatchObject([true, VALUE])
  })

  test('kase false', () => {
    const UNIQUE = 'UNIQUE'
    const MATCH = 'MATCH'
    expect(kase(MATCH)(UNIQUE)('SOMETHING ELSE')).toMatchObject([false, UNIQUE])
  })

  test('kase multiple', () => {
    const UNIQUE = 'UNIQUE'
    const MATCH = 'MATCH'
    const MATCH_ANOTHER = '314234324'
    expect(kase(MATCH, MATCH_ANOTHER)(UNIQUE)(MATCH_ANOTHER)).toMatchObject([
      true,
      UNIQUE,
    ])
  })

  test('swiss kase', () => {
    const thisOne = 'you found me'
    const result = swiss('YES', 'MAYBE')(
      kase('NOPE')('sorry'),
      kase('NOPE')('next time'),
      kase('NOPE', 'YES')(thisOne),
      kase('MAYBE')('you can also found me here'),
    )
    expect(result).toBe(thisOne)
  })

  test('swiss kase default needle', () => {
    const defaultValue = 'This one is default value'
    const defaultNeedle = 'This one is default needle'

    const result = swiss('WHATEVER', defaultNeedle)(
      kase('NO WAY')('oops'),
      kase(defaultNeedle)(defaultValue),
    )

    expect(result).toBe(defaultValue)
  })

  test('swiss kase default', () => {
    const defaultValue = 'This one is default'
    const result = swiss('WHATEVER')(
      kase('NO WAY')('oops'),
      kase()(defaultValue),
    )

    expect(result).toBe(defaultValue)
  })

  // test('dynamic', () => {
  //   const englishKase = [
  //     [
  //       'cheddar',
  //       'stilton',
  //       'red leicester',
  //       'mature cheddar',
  //       'cornish',
  //       'durham',
  //       'cheshire',
  //     ],
  //     String.fromCodePoint(127468),
  //   ]
  //   const turkishKase = [
  //     [
  //       'white cheese',
  //       'ezine',
  //       'bergama tulum',
  //       'mihaliç',
  //       'gravyer',
  //       'fresh milk',
  //       'aged kashar',
  //       'van',
  //       'goat white cheese',
  //       'smoked circassian',
  //       'konya green cheese',
  //     ],
  //     String.fromCodePoint(127481),
  //   ]
  //   const italianKase = [
  //     [
  //       'mozerella',
  //       'gorgonzola',
  //       'parmeggiano',
  //       'grand padona',
  //       'ricotta',
  //       'grana padano',
  //       'pecorino',
  //       'taleggio',
  //       'provolone',
  //       'mascarpone',
  //     ],
  //     String.fromCodePoint(127470),
  //   ]
  //   const dutchKase = [
  //     ['gouda', 'edam', 'maasdam', 'leyden', 'mimolette', 'beemster'],
  //     String.fromCodePoint(127470),
  //   ]
  //   const frenchKase = [
  //     ['brie', 'camembert', 'roquefort', 'munster', 'livarot', 'reblochon'],
  //     String.fromCodePoint(127467),
  //   ]
  //   const swissKase = [
  //     [
  //       'fondue',
  //       'raclette',
  //       'emmentaler',
  //       'appanzeller',
  //       'tête de moine',
  //       'gruyère',
  //       'schabziger',
  //       'formaggini',
  //     ],
  //     String.fromCodePoint(127464),
  //   ]
  //   const allKase = [
  //     ...italianKase,
  //     ...dutchKase,
  //     ...swissKase,
  //     ...turkishKase,
  //     ...frenchKase,
  //   ].map(([cheeseList, cheeseCountry]) =>
  //     kase(...debug(cheeseList, 'cheeseList'))(
  //       debug(cheeseCountry, 'cheeseCountry'),
  //     ),
  //   )
  //   debug(allKase.map()(), 'allKase %O')
  //   swiss('raclette')(...allKase) // -> '🇨🇭' // swiss('cheddar')(...allKase) // -> '🇬🇧' // swiss('gorgonzola')(...allKase) // -> '🇮🇹' // swiss('gouda')(...allKase) // -> '🇳🇱' // swiss('ezine')(...allKase) // -> '🇹🇷' // })
})
