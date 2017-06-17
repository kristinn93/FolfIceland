open ReactNative;

open ReasonReact;

let component = ReasonReact.statelessComponent "CourseList";

type course = Js.t {. name : string};

type route = Js.t {. name : string};

type props = {courses: option (array course), navigate: string => route => unit};

let make ::courses=? ::navigate _ => {
  let navigateTo (navigate: route => unit) (route: route) => navigate route;
  let renderName navigate item => {
    let course = item##item;
    let route = {"name": course##name};
    let navigator () => navigate route;
    <Button key=course##name title=course##name onPress=navigator />
  };
  {
    ...component,
    render: fun _ _ =>
      <ScrollView>
        <View
          style=(
            Style.style [Style.alignItems `center, Style.justifyContent `center, Style.flex 1.0]
          )>
          (
            switch courses {
            | None => <Text> (ReasonReact.stringToElement "Loading...") </Text>
            | Some courses =>
              <FlatList data=courses renderItem=(renderName (navigateTo (navigate "details"))) />
            }
          )
        </View>
      </ScrollView>
  }
};

let app =
  ReasonReact.wrapReasonForJs
    ::component (fun jsProps => make courses::jsProps##courses navigate::jsProps##navigate [||]);
