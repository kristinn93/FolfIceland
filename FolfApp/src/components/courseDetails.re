module CourseDetails = {
  include ReactNative;
  include ReactRe.Component.JsProps;
  let name = "CourseDetails";
  type par = Js.t {. red : Js.Null.t int, white : Js.Null.t int, blue : Js.Null.t int};
  type location = Js.t {. lat : float, long : float};
  type course =
    Js.t {. name : string, city : string, par : par, location : location, __typename : string};
  type props = {course: option course, loading: bool};
  type jsProps = Js.t {. course : Js.Null_undefined.t course, loading : bool};
  let jsPropsToReasonProps =
    Some (
      fun jsProps => {course: Js.Null_undefined.to_opt jsProps##course, loading: jsProps##loading}
    );
  let renderPars (par: par) =>
    <View>
      (
        switch (Js.Null.to_opt par##red) {
        | Some numPar => <Text> (ReactRe.stringToElement ("Red: " ^ string_of_int numPar)) </Text>
        | None => <View />
        }
      )
      (
        switch (Js.Null.to_opt par##white) {
        | Some numPar =>
          <Text> (ReactRe.stringToElement ("White: " ^ string_of_int numPar)) </Text>
        | None => <View />
        }
      )
      (
        switch (Js.Null.to_opt par##blue) {
        | Some numPar => <Text> (ReactRe.stringToElement ("Blue: " ^ string_of_int numPar)) </Text>
        | None => <View />
        }
      )
    </View>;
  let render {props} =>
    <View style=(Style.style [Style.alignItems `center, Style.alignItems `center, Style.flex 1.0])>
      (
        switch (props.course, props.loading) {
        | (Some course, _) =>
          <View>
            <Text> (ReactRe.stringToElement course##name) </Text>
            <Text> (ReactRe.stringToElement course##city) </Text>
            (renderPars course##par)
          </View>
        | (_, true) => <Text> (ReactRe.stringToElement "Loading...") </Text>
        | (_, _) =>
          <Text> (ReactRe.stringToElement "Something went wrong, sorry about that") </Text>
        }
      )
    </View>;
};

include ReactRe.CreateComponent CourseDetails;

let createElement ::course ::loading => wrapProps {course, loading};