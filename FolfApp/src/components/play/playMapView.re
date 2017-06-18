open ReactNative;

type location = Js.t {. lat : float, long : float};

type par =
  Js.t {. red : Js.Undefined.t int, white : Js.Undefined.t int, blue : Js.Undefined.t int};

type teePad = Js.t {. par : int, location : location};

type teePads =
  Js.t {
    .
    red : Js.Undefined.t teePad, white : Js.Undefined.t teePad, blue : Js.Undefined.t teePad
  };

type basket = Js.t {. number : int, teePads : teePads, location : location};

type course = Js.t {. name : string, par : par, baskets : array basket};

let component = ReasonReact.statelessComponent "PlayMapView";

let make ::course=? ::loading _ => {
  let fetchTeePadsFromBasket basket =>
    switch (
      Js.Undefined.to_opt basket##teePads##red,
      Js.Undefined.to_opt basket##teePads##white,
      Js.Undefined.to_opt basket##teePads##blue
    ) {
    | (Some red, _, _) => {"latitude": red##location##lat, "longitude": red##location##long}
    | (_, Some white, _) => {"latitude": white##location##lat, "longitude": white##location##long}
    | (_, _, Some blue) => {"latitude": blue##location##lat, "longitude": blue##location##long}
    | (_, _, _) => {"latitude": 0., "longitude": 0.}
    };
  let findTeePadCoordinates baskets => Array.map fetchTeePadsFromBasket baskets;
  let dimensions = Dimensions.get `window;
  {
    ...component,
    render: fun _ _ =>
      switch (course, loading) {
      | (Some course, _) =>
        let teePadCoordinates = findTeePadCoordinates course##baskets;
        let region = {
          let latitudes = Array.map (fun coordinate => coordinate##latitude) teePadCoordinates;
          let longitudes = Array.map (fun coordinate => coordinate##longitude) teePadCoordinates;
          let maxLatitude = Array.fold_left max latitudes.(0) latitudes;
          let minLatitude = Array.fold_left min latitudes.(0) latitudes;
          let maxLongitude = Array.fold_left max longitudes.(0) longitudes;
          let minLongitude = Array.fold_left min longitudes.(0) longitudes;
          let centerLatitude = (maxLatitude +. minLatitude) /. 2.0;
          let centerLongitude = (maxLongitude +. minLongitude) /. 2.0;
          let latitudeDelta = maxLatitude -. minLatitude;
          let longitudeDelta = maxLongitude -. minLongitude;
          {
            "latitude": centerLatitude,
            "longitude": centerLongitude,
            "latitudeDelta": latitudeDelta *. 1.15,
            "longitudeDelta": longitudeDelta *. 1.15
          }
        };
        <MapView
          region
          style=(
            Style.style [
              Style.height (float_of_int (dimensions##height - 300)),
              Style.width (float_of_int dimensions##width)
            ]
          )
          markers=teePadCoordinates
        />
      | (None, true) => <Text> (ReasonReact.stringToElement "Loading...") </Text>
      | (None, false) => <Text> (ReasonReact.stringToElement "Something terrible happened") </Text>
      }
  }
};

let app =
  ReasonReact.wrapReasonForJs
    ::component
    (
      fun jsProps =>
        make course::?(Js.Null_undefined.to_opt jsProps##course) loading::jsProps##loading [||]
    );
