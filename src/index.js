//@flow
import { either, pipe } from 'ramda'
import { thrower } from '@chantelle/util'

// eslint-disable-next-line better/explicit-return,fp/no-nil
// const thrower = error => {
//   // eslint-disable-next-line fp/no-throw,fp/no-nil
//   throw error
// }

export const kase = (...haystack: Array<any>) => value =>
  pipe(needle => [
    either(
      haystack => haystack.find(hay => hay === needle) && true,
      haystack => haystack.length === 0,
    )(haystack),
    value,
  ])

export const swiss = (needle, defaultNeedle) => (...kases) =>
  pipe(
    either(
      kases =>
        kases
          .map(kase => kase(needle))
          .find(([kaseResult]) => kaseResult === true),
      kases =>
        kases
          .map(kase => kase(defaultNeedle))
          .find(([kaseResult]) => kaseResult === true),
    ),
    either(
      kases =>
        kases === undefined && thrower(Error('No kase matched in swiss')),
      kases => kases,
    ),
    result => result.reduce((accumulator, next) => next),
  )(kases)

export default {
  [String.fromCodePoint(128298)]: kase,
  [String.fromCodePoint(129472)]: swiss,
  kase,
  swiss,
}
