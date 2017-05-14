module CourseDetails = {
  include ReactNative;
  include ReactRe.Component.JsProps;
  let name = "CourseDetails";
  type par = Js.t {. red : Js.Null.t int, white : Js.Null.t int, blue : Js.Null.t int};
  type location = Js.t {. lat : float, long : float};
  type course =
    Js.t {. name : string, city : string, par : par, location : location, __typename : string};
  type props = {course: option course, loading: bool, openMaps: location => unit};
  type jsProps =
    Js.t {. course : Js.Null_undefined.t course, loading : bool, openMaps : location => unit};
  let jsPropsToReasonProps =
    Some (
      fun jsProps => {
        course: Js.Null_undefined.to_opt jsProps##course,
        loading: jsProps##loading,
        openMaps: jsProps##openMaps
      }
    );
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
  type region =
    Js.t {. latitude : float, longitude : float, latitudeDelta : float, longitudeDelta : float};
  type marker = Js.t {. latitude : float, longitude : float};
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
          marker
        />
        <View style=(Style.style [Style.backgroundColor "#EEEEEE"])>
          <Button color="#666666" onPress=(fun () => openMaps location) title="Get directions" />
        </View>
      </View>
    };
  let render {props} =>
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
        switch (props.course, props.loading) {
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
              (renderMapDetails course##par course##location props.openMaps region marker)
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
              <Button onPress=(fun () => ()) color="#FF0000" title="Play" />
            </View>
          </View>
        | (_, true) => <Text> (ReactRe.stringToElement "Loading...") </Text>
        | (_, _) =>
          <Text> (ReactRe.stringToElement "Something went wrong, sorry about that") </Text>
        }
      )
    </View>;
};

include ReactRe.CreateComponent CourseDetails;

let createElement ::course ::loading ::openMaps => wrapProps {course, loading, openMaps};
