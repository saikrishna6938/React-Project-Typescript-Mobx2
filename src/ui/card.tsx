import { PropsLayout } from "../model";

function Card(props: PropsLayout) {
  return <div className="card  my-3">{props.children}</div>;
}
export default Card;
