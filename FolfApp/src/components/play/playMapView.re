open ReactNative;

type location = Js.t {. lat : float, long : float};

type par = Js.t {. red : Js.Null.t int, white : Js.Null.t int, blue : Js.Null.t int};

type teePad = Js.t {. par : int, location : location};

type teePads = Js.t {. red : Js.Null.t teePad, white : Js.Null.t teePad, blue : Js.Null.t teePad};

type basket = Js.t {. number : int, teePads : teePads, location : location};

type course = Js.t {. name : string, par : par, baskets : list basket};

let component = ReasonReact.statelessComponent "PlayMapView";

/* <MapView region style=(Style.style []) markers=[|marker|] /> */
let make ::course ::loading _ => {
  Js.log course;
  {...component, render: fun _ _ => <Text> (ReasonReact.stringToElement "MapView") </Text>}
};
