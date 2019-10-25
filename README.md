# 📈 Segment analytics integration for web

Just another alternative of library for [Segment](https://segment.com/) analytics, written on [TypeScript](https://www.typescriptlang.org/index.html).

## Usage 🎓

```js
import { initializeAnalytics } from 'segment-analytics-web';

const writeKey = 'your-segment-api-key';
const analytics = initializeAnalytics(writeKey);

analytics.identify('97980cfea0067', {
  name: 'Woof Bark'
});

// window.analytics also available
```

## Future plans 🧐

* Loading options
* Fully typed methods
* Tests
