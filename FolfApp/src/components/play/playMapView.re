/*module PlayMapView = {
    include ReactNative;
    include ReactRe.Component.JsProps;
    type location = Js.t {. lat : float, long : float};
    type par = Js.t {. red : Js.Null.t int, white : Js.Null.t int, blue : Js.Null.t int};
    type teePad = Js.t {. par : int, location : location};
    type teePads =
      Js.t {. red : Js.Null.t teePad, white : Js.Null.t teePad, blue : Js.Null.t teePad};
    type basket = Js.t {. number : int, teePads : teePads, location : location};
    type course = Js.t {. name : string, par : par, baskets : list basket};
    type props = {course: option course, loading: bool};
    type jsProps = Js.t {. course : Js.Null_undefined.t course, loading : bool};
    let jsPropsToReasonProps =
      Some (
        fun jsProps => {course: Js.Null_undefined.to_opt jsProps##course, loading: jsProps##loading}
      );
    let name = "PlayMapView";
    let render {props} => <View> <Text> (ReactRe.stringToElement "Map view") </Text> </View>;
    /* <MapView region style=(Style.style []) markers=[|marker|] /> */
  };

  include ReactRe.CreateComponent PlayMapView;

  let createElement ::course ::loading => wrapProps {course, loading};*/
