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
  let renderPars (par: par) =>
    <View>
      (
        switch (Js.Null.to_opt par##red, Js.Null.to_opt par##white, Js.Null.to_opt par##blue) {
        | (None, None, None) =>
          <Text> (ReactRe.stringToElement "This course has not been logged yet") </Text>
        | (Some 0, Some 0, Some 0) =>
          <Text> (ReactRe.stringToElement "This course has not been logged yet") </Text>
        | _ =>
          <View>
            (
              switch (Js.Null.to_opt par##red) {
              | Some numPar =>
                <Text style=(Style.style [Style.textAlign `center])>
                  (ReactRe.stringToElement ("Red: " ^ string_of_int numPar))
                </Text>
              | None => <View />
              }
            )
            (
              switch (Js.Null.to_opt par##white) {
              | Some numPar =>
                <Text style=(Style.style [Style.textAlign `center])>
                  (ReactRe.stringToElement ("White: " ^ string_of_int numPar))
                </Text>
              | None => <View />
              }
            )
            (
              switch (Js.Null.to_opt par##blue) {
              | Some numPar =>
                <Text style=(Style.style [Style.textAlign `center])>
                  (ReactRe.stringToElement ("Blue: " ^ string_of_int numPar))
                </Text>
              | None => <View />
              }
            )
          </View>
        }
      )
    </View>;
  let render {props} =>
    <View
      style=(Style.style [Style.alignItems `center, Style.justifyContent `center, Style.flex 1.0])>
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
          <View style=StyleSheet.absoluteFillObject>
            <MapView
              region
              style=(
                      Style.combine
                        StyleSheet.absoluteFillObject (Style.style [Style.marginTop 100])
                    )
              marker
            />
            <Text style=(Style.style [Style.textAlign `center])>
              (ReactRe.stringToElement course##name)
            </Text>
            <Text style=(Style.style [Style.textAlign `center])>
              (ReactRe.stringToElement course##city)
            </Text>
            (renderPars course##par)
            <Button onPress=(fun () => props.openMaps course##location) title="Open in Maps" />
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
