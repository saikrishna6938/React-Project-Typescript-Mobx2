import { PropsLayout } from "../model";
import MainNavigation from "./mainNavigation";
function Layout(props: PropsLayout) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      {props.children}
    </div>
  );
}
export default Layout;
