module Page = {
  include ReactNative;
  include ReactRe.Component.JsProps;
  type props = {message: string};
  type jsProps = Js.t {. message : string};
  let jsPropsToReasonProps = Some (fun jsProps => {message: jsProps##message});
  let name = "Page";
  let render {props} =>
    <View>
      <Text>
        (ReactRe.stringToElement (props.message ^ " from ReasonML using ReactNativeRe"))
      </Text>
    </View>;
};

include ReactRe.CreateComponent Page;

let createElement ::message => wrapProps {message: message};
