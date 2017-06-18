open ReactNative;

let component = ReasonReact.statefulComponent "Score";

let make ::name _children => {
  let click () state _self => ReasonReact.Update state;
  let updateInput number state _self => ReasonReact.Update state;
  {
    ...component,
    initialState: fun () => 0,
    render: fun state self => {
      let greeting =
        "Hello " ^ name ^ ". You've clicked the button " ^ string_of_int state ^ " time(s)!";
      <View> <Button onPress=(self.update click) title=greeting /> </View>
    }
  }
};

let app = ReasonReact.wrapReasonForJs ::component (fun jsProps => make jsProps##name [||]);