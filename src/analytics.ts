type SegmentMethod = 'trackSubmit' | 'trackClick' | 'trackLink' | 'trackForm' | 'pageview' | 'identify' | 'reset' | 'group' | 'track' | 'ready' | 'alias' | 'debug' | 'page' | 'once' | 'off' | 'on';
type SegmentMethods = { [key in SegmentMethod]: Function };

interface Analytics extends SegmentMethods, Array<any> {}

interface InitializedAnalytics extends Omit<Analytics, keyof Array<any>> {
  initialize: Function;
}

type SegmentAnalytics = Analytics | InitializedAnalytics;

declare global {
  interface Window {
    analytics?: SegmentAnalytics;
  }
}

let invoked = false;

class Analytics extends Array {
  readonly SNIPPET_VERSION = '4.1.0';

  constructor() {
    super();

    const factory = (method: SegmentMethod) => {
      return (...args: any) => {
        args.unshift(method);

        this.push(args);

        return this;
      };
    };

    this.trackSubmit = factory('trackSubmit');
    this.trackClick = factory('trackClick');
    this.trackLink = factory('trackLink');
    this.trackForm = factory('trackForm');
    this.pageview = factory('pageview');
    this.identify = factory('identify');
    this.reset = factory('reset');
    this.group = factory('group');
    this.track = factory('track');
    this.ready = factory('ready');
    this.alias = factory('alias');
    this.debug = factory('debug');
    this.page = factory('page');
    this.once = factory('once');
    this.off = factory('off');
    this.on = factory('on');
  }
}

function isInitialized(analytics: SegmentAnalytics) : analytics is InitializedAnalytics {
  return 'initialize' in analytics;
}

function initialize(writeKey: string) : void {
  let analytics : SegmentAnalytics = window.analytics = window.analytics || new Analytics();

  if (isInitialized(analytics)) {
    return;
  }

  if (invoked) {
    console.error('Segment snippet included twice.');
  }

  invoked = true;

  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://cdn.segment.com/analytics.js/v1/${writeKey}/analytics.min.js`;

  document.body.insertBefore(script, null);

  analytics.page();
}

const segment = {
  initialize,

  get analytics() : SegmentAnalytics {
    if (window.analytics === undefined) {
      window.analytics = new Analytics();
    }

    return window.analytics;
  }
}

export {
  SegmentAnalytics,
  segment
};
