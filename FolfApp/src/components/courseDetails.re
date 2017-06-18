open ReactNative;

open ReasonReact;

let component = ReasonReact.statelessComponent "CourseDetails";

type par = Js.t {. red : Js.Null.t int, white : Js.Null.t int, blue : Js.Null.t int};

type location = Js.t {. lat : float, long : float};

type route = Js.t {. name : string, selectedColor : string};

type course = Js.t {. name : string, city : string, par : par, location : location};

type region =
  Js.t {. latitude : float, longitude : float, latitudeDelta : float, longitudeDelta : float};

type marker = Js.t {. latitude : float, longitude : float};

let make ::course=? ::loading ::openMaps ::play _ => {
  let dimensions = Dimensions.get `window;
  let renderPars (par: par) =>
    <View>
      <Text style=(Style.style [Style.fontSize 20.0])> (ReactRe.stringToElement "Par") </Text>
      (
        switch (Js.Null.to_opt par##red, Js.Null.to_opt par##white, Js.Null.to_opt par##blue) {
        | (None, None, None) =>
          <Text> (ReactRe.stringToElement "This course has not been logged yet") </Text>
        | (Some 0, Some 0, Some 0) =>
          <Text> (ReactRe.stringToElement "This course has not been logged yet") </Text>
        | _ =>
          <View style=(Style.style [Style.flexDirection `row, Style.justifyContent `spaceBetween])>
            (
              switch (Js.Null.to_opt par##red) {
              | Some numPar =>
                <Text style=(Style.style [Style.fontSize 18.0])>
                  (ReactRe.stringToElement ("Red: " ^ string_of_int numPar))
                </Text>
              | None => <View />
              }
            )
            (
              switch (Js.Null.to_opt par##white) {
              | Some numPar =>
                <Text style=(Style.style [Style.fontSize 18.0])>
                  (ReactRe.stringToElement ("White: " ^ string_of_int numPar))
                </Text>
              | None => <View />
              }
            )
            (
              switch (Js.Null.to_opt par##blue) {
              | Some numPar =>
                <Text style=(Style.style [Style.fontSize 18.0])>
                  (ReactRe.stringToElement ("Blue: " ^ string_of_int numPar))
                </Text>
              | None => <View />
              }
            )
          </View>
        }
      )
    </View>;
  let renderMapDetails
      (par: par)
      (location: location)
      (openMaps: location => unit)
      (region: region)
      (marker: marker) =>
    switch (Js.Null.to_opt par##red, Js.Null.to_opt par##white, Js.Null.to_opt par##blue) {
    | (None, None, None) => <View />
    | (Some 0, Some 0, Some 0) => <View />
    | (_, _, _) =>
      <View>
        <MapView
          region
          style=(
            Style.style [
              Style.height (float_of_int (dimensions##height - 300)),
              Style.width (float_of_int dimensions##width)
            ]
          )
          markers=[|marker|]
        />
        <View style=(Style.style [Style.backgroundColor "#EEEEEE"])>
          <Button color="#666666" onPress=(fun () => openMaps location) title="Get directions" />
        </View>
      </View>
    };
  {
    ...component,
    render: fun _ _ =>
      <View
        style=(
          Style.style [
            Style.alignItems `center,
            Style.justifyContent `flexStart,
            Style.flex 1.0,
            Style.backgroundColor "#FAFAFA"
          ]
        )>
        (
          switch (course, loading) {
          | (Some course, _) =>
            let region = {
              "latitude": course##location##lat,
              "longitude": course##location##long,
              "latitudeDelta": 0.008,
              "longitudeDelta": 0.008
            };
            let marker = {"latitude": course##location##lat, "longitude": course##location##long};
            <View>
              <View style=(Style.style [Style.flex 93.0])>
                (renderMapDetails course##par course##location openMaps region marker)
                <View style=(Style.style [Style.marginLeft 10.0, Style.marginBottom 10.0])>
                  <Text style=(Style.style [Style.fontSize 40.0])>
                    (ReactRe.stringToElement course##name)
                  </Text>
                  <Text style=(Style.style [Style.fontSize 25.0])>
                    (ReactRe.stringToElement course##city)
                  </Text>
                  (renderPars course##par)
                </View>
              </View>
              <View
                style=(
                  Style.style [
                    Style.flex 7.0,
                    Style.borderTopWidth 2.0,
                    Style.borderTopColor "#EEEEEE"
                  ]
                )>
                <Button
                  onPress=(fun _ => play {"name": course##name, "selectedColor": "red"})
                  color="#FF0000"
                  title="Play"
                />
              </View>
            </View>
          | (_, true) => <Text> (ReactRe.stringToElement "Loading...") </Text>
          | (_, _) =>
            <Text> (ReactRe.stringToElement "Something went wrong, sorry about that") </Text>
          }
        )
      </View>
  }
};

let app =
  ReasonReact.wrapReasonForJs
    ::component
    (
      fun jsProps =>
        make
          course::?(Js.Null_undefined.to_opt jsProps##course)
          loading::jsProps##loading
          openMaps::jsProps##openMaps
          play::jsProps##play
          [||]
    );
