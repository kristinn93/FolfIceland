external mapViewWrapper : ReasonReact.reactClass =
  "MapViewWrapper" [@@bs.module "../../../../../src/components/maps/MapViewWrapper.js"];

let make ::style=? ::region=? ::markers=? children =>
  ReasonReact.wrapJsForReason
    reactClass::mapViewWrapper
    props::
      Js.Undefined.(
        {"style": from_opt style, "region": from_opt region, "markers": from_opt markers}
      )
    children;
