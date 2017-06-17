open ReactNative;

open ReasonReact;

let component = ReasonReact.statelessComponent "CourseList";

type course = Js.t {. name : string};

type route = Js.t {. name : string};

type props = {courses: option (array course), navigate: string => route => unit};

let navigateTo (navigate: route => unit) (route: route) => navigate route;

let renderName (navigate: route => unit) (course: course) => {
  let route = {"name": course##name};
  let navigator () => navigate route;
  <Button key=course##name title=course##name onPress=navigator />
};

let make ::courses ::navigate _ => {
  ...component,
  render: fun _ _ =>
    <ScrollView>
      <View
        style=(
          Style.style [Style.alignItems `center, Style.justifyContent `center, Style.flex 1.0]
        )>
        (
          switch courses {
          | None => <Text> (ReactRe.stringToElement "Loading...") </Text>
          | Some courses =>
            ReactRe.listToElement (
              List.map (renderName (navigateTo (navigate "details"))) (Array.to_list courses)
            )
          }
        )
      </View>
    </ScrollView>
};
