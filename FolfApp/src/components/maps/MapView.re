external mapViewWrapper : ReactRe.reactClass =
  "MapViewWrapper" [@@bs.module "../../../../../src/components/maps/MapViewWrapper.js"];

let createElement ::style=? ::region=? ::marker=? =>
  ReactRe.wrapPropsShamelessly
    mapViewWrapper
    Js.Undefined.({"style": from_opt style, "region": from_opt region, "marker": from_opt marker});
