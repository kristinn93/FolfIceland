open ReactNative;

let component = ReasonReact.statefulComponent "Score";

let make ::name _children => {
  let updateInput number _ _ => ReasonReact.Update number;
  {
    ...component,
    initialState: fun () => "",
    render: fun state self =>
      <TextInput
        style=(Style.style [Style.height 300., Style.width 300.])
        keyboardType=`numeric
        onChangeText=(self.update updateInput)
        value=state
      />
  }
};

let app = ReasonReact.wrapReasonForJs ::component (fun jsProps => make jsProps##name [||]);
