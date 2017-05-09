module CourseList = {
  include ReactNative;
  include ReactRe.Component.JsProps;
  let name = "CourseList";
  type course = Js.t {. name : string};
  type route = Js.t {. name : string};
  type props = {courses: option (array course), navigate: string => route => unit};
  type jsProps =
    Js.t {. courses : Js.Null_undefined.t (array course), navigate : string => route => unit};
  let jsPropsToReasonProps =
    Some (
      fun jsProps => {
        courses: Js.Null_undefined.to_opt jsProps##courses,
        navigate: jsProps##navigate
      }
    );
  let navigateTo (navigate: route => unit) (route: route) => navigate route;
  let renderName (navigate: route => unit) (course: course) => {
    let route = {"name": course##name};
    let navigator () => navigate route;
    <Button key=course##name title=course##name onPress=navigator />
  };
  let render {props} =>
    <ScrollView>
      <View
        style=(
                Style.style [Style.alignItems `center, Style.justifyContent `center, Style.flex 1.0]
              )>
        (
          switch props.courses {
          | None => <Text> (ReactRe.stringToElement "Loading...") </Text>
          | Some courses =>
            ReactRe.listToElement (
              List.map (renderName (navigateTo (props.navigate "details"))) (Array.to_list courses)
            )
          }
        )
      </View>
    </ScrollView>;
};

include ReactRe.CreateComponent CourseList;

let createElement ::courses ::navigate => wrapProps {courses, navigate};
