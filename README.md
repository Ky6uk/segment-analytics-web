# DEPRECATION NOTICE

> Since `v2` Segment now has it's own well-maintained library written using TypeScript.
> 
> Please [check the original repository](https://github.com/segmentio/analytics-next/tree/master/packages/browser) for the details.


# 📈 Segment analytics integration for web

Just another alternative of library for [Segment](https://segment.com/) analytics, written on [TypeScript](https://www.typescriptlang.org/index.html).

## Usage 🎓

```ts
import segment from 'segment-analytics-web';

segment.initialize('your-segment-api-key');

segment.analytics.identify('97980cfea0067', {
  name: 'Woof Bark'
});

// window.analytics should be also available
```

## Future plans 🧐

* Loading options
* Fully typed methods
* Tests
