# @nod/swiss-kase 🇨🇭 🧀 🔪

Switch Case as good as Swiss Cheese. Idiomatic-like, dynamic, functional, predictable, stateless, mature, low-fat and fun 🎈 at the same time.

`Käse`,`|kɛːzə|`: Cheese (🇩🇪,🇨🇭)

## Usage

*swiss `(needle: any, defaultNeedle?: any = undefined)` `->` `(...haystack: kase())`*

*kase `(haystack: any)` `->` `returnValue: any)` `->` `(needle: any)`*

### Simple

```javascript
import { swiss, kase } from '@nod/swiss-kase'

swiss('Raclette')(
  kase('Brie')('Nope'),
  kase('Raclette')('Yes'),
) // -> 'Yes'
```

### Fun 🧀 🔪
```javascript
import swissKase from '@nod/swiss-kase'

swissKase['🧀'](1)(
  swissKase['🔪'](1)('Fondue')
  swissKase['🔪'](2)('Feta')
  swissKase['🔪'](3)('Gorgonzola')
) // -> 'Fondue'
```

### With Default Value

```javascript

swiss('Irrelevant Value')(
  kase('Italian')(['Parmeggiano', 'Ricotta']),
  kase('French')(['Roquefort']),
  kase()(['Appenzeller','Emmentaler', 'Sbrinz', 'Raclette']),
) // -> ['Appenzeller','Emmentaler', 'Sbrinz', 'Raclette']
```

### With Multiple Matches

```javascript
swiss('WOULDNT MATCH', 'Swiss')(
  kase('Parmeggiano', 'Ricotta')('Italian'),
  kase('Roquefort')('French'),
  kase('Gruyère','Emmentaler', 'Sbrinz', 'Raclette')('Swiss'),
) // -> 'Swiss'
```

### With Custom Defined Default Value

```javascript
swiss('Irrelevant Value', 'Swiss')(
  kase('Italian')(['Parmeggiano', 'Ricotta']),
  kase('French')(['Roquefort']),
  kase('Swiss')(['Gruyère','Emmentaler', 'Sbrinz', 'Raclette']),
) // -> ['Gruyère','Emmentaler', 'Sbrinz', 'Raclette']
```

### Getting Advanced With Dynamic Cases

```javascript
const english = [['cheddar', 'stilton', 'red leicester', 'mature cheddar', 'cornish', 'durham', 'cheshire'], '🇬🇧']
const turkish = [['white cheese', 'ezine', 'bergama tulum', 'mihaliç', 'gravyer', 'fresh milk', 'aged kashar', 'van', 'goat white cheese', 'smoked circassian', 'konya green cheese'], '🇹🇷']
const italian = [['mozerella', 'gorgonzola', 'parmeggiano', 'grand padona', 'ricotta', 'grana padano', 'pecorino', 'taleggio', 'provolone', 'mascarpone'], '🇮🇹']
const dutch = [['gouda', 'edam', 'maasdam', 'leyden', 'mimolette', 'beemster'], '🇳🇱']
const french = [['brie', 'camembert', 'roquefort', 'munster', 'livarot', 'reblochon'], '🇫🇷']
const swiss = [['fondue', 'raclette', 'emmentaler', 'appanzeller', 'tête de moine','gruyère', 'schabziger', 'formaggini'], '🇨🇭']
const allKase = [...italian, ...dutch, ...swiss, ...turkish]
  .map((([cheeseList, cheeseCountry]) =>
    kase(...cheeseList)(cheeseCountry)))

swiss('raclette')(...allKase) // -> '🇨🇭'
swiss('cheddar')(...allKase) // -> '🇬🇧'
swiss('gorgonzola')(...allKase) // -> '🇮🇹'
swiss('gouda')(...allKase) // -> '🇳🇱'
swiss('ezine')(...allKase) // -> '🇹🇷'
```

## Scripts
- ### `yarn start`
Starts auto build process

- ### `yarn test`
Run tests

- ### `yarn build`
Run module

- ### `yarn test-once`
Run test without watch mode

## Development and additional usage
Please see [@nod/nod](https://github.com/NOD-studios/nod) monorepo

## License
Apache 2.0
