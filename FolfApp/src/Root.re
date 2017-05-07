module Root = {
  include ReactNative;
  include ReactRe.Component.JsProps;
  type props = {message: string};
  type jsProps = Js.t {. message : string};
  let jsPropsToReasonProps = Some (fun jsProps => {message: jsProps##message});
  let name = "Root";
  let render {props} =>
    <View style=(Style.style [Style.marginTop 100, Style.backgroundColor "#DADADA"])>
      <Text>
        (ReactRe.stringToElement (props.message ^ " from ReasonML using ReactNativeRe"))
      </Text>
    </View>;
};

include ReactRe.CreateComponent Root;

let createElement ::message => wrapProps {message: message};
