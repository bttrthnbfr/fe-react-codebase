/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

const Menu = () => (
  <div className="flex bg-gray-200">

    <div className="w-56 bg-green-300 fixed">
      <ol>
        <li>
          menu a
        </li>
        <li>
          menu b
        </li>
        <li>
          menu c
        </li>
      </ol>
    </div>

    <div className="ml-56">
      <div className="p-4">
        <p>
          Lorem ipsum dolor sit amet, dolore consequat sit sunt excepteur ut adipisicing non nulla laboris eu ad aliqua do in exercitation magna occaecat amet labore dolore pariatur eiusmod dolore ex mollit qui nisi aliquip mollit laborum cillum dolor nulla nostrud ad et anim nostrud ea aliquip mollit incididunt laboris minim excepteur ex consequat et enim consequat pariatur anim aliquip labore amet enim do excepteur occaecat voluptate fugiat sint non laboris dolore duis duis ipsum Lorem sit elit est ullamco deserunt eiusmod aliqua in excepteur laborum ipsum Lorem mollit dolor aute aliquip dolore duis ad et tempor quis aliqua culpa adipisicing tempor Lorem excepteur est fugiat duis ad dolor in culpa ex dolor laboris veniam irure non minim anim ad ex deserunt esse elit nisi pariatur incididunt non fugiat anim duis est laboris et aliqua esse est cillum ipsum aute adipisicing deserunt pariatur officia voluptate quis quis occaecat cupidatat ipsum ex ad elit et laborum irure excepteur sunt proident voluptate deserunt cillum veniam aliqua id velit sit ullamco proident labore aute duis duis tempor minim proident mollit occaecat dolore excepteur eiusmod labore eiusmod consequat eiusmod irure esse ex tempor cupidatat velit eu do exercitation non proident fugiat anim aliqua sint incididunt sit non et esse eu anim est veniam culpa adipisicing commodo ullamco Lorem fugiat commodo duis amet esse pariatur tempor consequat culpa consequat sint amet do non ullamco tempor est proident duis minim commodo irure magna esse ex ea tempor quis excepteur Lorem incididunt eiusmod et cupidatat cupidatat mollit ad do laboris cillum eiusmod excepteur labore sint veniam id anim nostrud esse aliquip occaecat cillum officia mollit deserunt cillum aliquip officia proident labore non excepteur fugiat tempor est ullamco commodo duis ipsum enim excepteur eiusmod pariatur aute est incididunt commodo eiusmod aute mollit pariatur proident laboris Lorem irure non pariatur proident aute cillum irure consectetur aute proident labore nulla minim sint duis reprehenderit velit velit officia nisi ullamco fugiat sit eiusmod ad ipsum commodo mollit consectetur id velit ullamco irure dolore nulla consequat Lorem aute exercitation id veniam reprehenderit sit eu aliqua sint cupidatat elit est nostrud duis cupidatat fugiat commodo ex veniam aute duis duis ipsum aliquip qui anim ea exercitation cupidatat adipisicing ea enim quis amet officia sint amet magna reprehenderit nostrud deserunt excepteur et cillum sit qui magna do tempor non consectetur id proident ullamco irure proident eiusmod mollit do enim deserunt id ullamco commodo consequat pariatur eu dolore ea veniam id officia velit pariatur excepteur anim excepteur proident reprehenderit sunt dolor deserunt commodo laborum est nulla est velit officia pariatur sunt anim ipsum eiusmod pariatur commodo ad fugiat aute deserunt sunt qui nulla cupidatat veniam consequat sunt aliqua sunt incididunt laboris incididunt ad adipisicing adipisicing dolor exercitation culpa minim irure consequat exercitation eiusmod fugiat sunt quis sit ut aliqua irure anim labore ad deserunt incididunt elit aute exercitation qui quis aliquip cillum exercitation cupidatat tempor non labore veniam aliquip aliqua quis ea sit culpa quis mollit voluptate sunt pariatur irure consequat consectetur laborum quis amet in nisi consequat officia consectetur consequat non culpa minim exercitation ad anim tempor cupidatat minim irure qui ut nostrud nulla dolore irure minim sit fugiat do qui est in magna id fugiat reprehenderit est duis ea in eu exercitation do laborum eu voluptate consequat ipsum ipsum magna reprehenderit pariatur enim culpa commodo aute laborum qui sit irure id ipsum eu cupidatat fugiat laborum non mollit consectetur veniam sint consequat est voluptate ad cupidatat occaecat dolore anim officia do proident qui excepteur officia non mollit et consequat eu incididunt anim commodo adipisicing qui labore esse velit minim aliquip ut enim irure minim occaecat id adipisicing culpa magna culpa ullamco duis laborum minim anim magna veniam laboris proident esse magna eu laborum culpa Lorem minim occaecat in eiusmod deserunt aute aute pariatur officia et minim quis deserunt consequat exercitation do eiusmod aliqua duis Lorem cupidatat nisi fugiat duis occaecat dolor consequat excepteur do fugiat veniam aliqua amet est do dolore ad nisi proident anim enim minim exercitation quis exercitation aute pariatur consectetur ut eu reprehenderit do non consequat duis dolore pariatur dolore fugiat magna ipsum aute consectetur esse exercitation velit velit excepteur aliqua sit Lorem occaecat officia ut aliquip et anim proident duis ex dolor eiusmod sunt eu occaecat non est excepteur minim eiusmod eiusmod pariatur dolore ipsum velit occaecat irure aute excepteur aute aliqua quis officia nisi ad sint esse duis culpa aute aute elit aliquip occaecat officia ut veniam cillum fugiat pariatur minim duis nisi laborum anim minim ipsum eiusmod nulla mollit enim non excepteur cillum laboris fugiat excepteur labore laborum voluptate dolore excepteur adipisicing officia elit tempor laboris adipisicing nulla eiusmod qui qui elit ullamco quis eu fugiat esse non irure Lorem sint eiusmod nisi ullamco irure anim tempor incididunt minim deserunt aliquip sit laborum esse nulla quis est ex mollit commodo culpa occaecat id occaecat sit officia anim laborum fugiat elit non irure nisi aliquip reprehenderit nostrud cillum proident excepteur irure ad mollit eu esse do irure dolor minim enim labore elit ullamco aliquip aliqua proident laboris ea amet ad ex Lorem ad esse minim ut tempor proident elit officia adipisicing aliquip incididunt ut qui eu duis sit laboris deserunt duis reprehenderit fugiat sint exercitation proident ad deserunt quis ullamco tempor amet ullamco qui pariatur sit culpa irure labore eiusmod nostrud ad elit do aute mollit ex id aliquip deserunt dolor magna cillum sunt nostrud deserunt aute culpa exercitation non tempor cillum tempor occaecat quis pariatur id do id eiusmod incididunt ut mollit magna irure et voluptate ex magna ipsum laboris aliqua veniam enim irure ipsum nulla in magna cillum esse aute cupidatat exercitation non mollit nostrud aliqua amet pariatur eiusmod mollit incididunt in exercitation ut sint elit tempor minim Lorem et ut ullamco laborum est eu fugiat velit est ea voluptate id reprehenderit aliqua Lorem nostrud eu exercitation qui anim aute culpa dolor minim dolor qui enim non velit magna ipsum elit veniam quis reprehenderit cupidatat amet labore in esse cupidatat ea ipsum anim quis quis anim velit ea dolor duis elit commodo
        </p>
      </div>
    </div>
  </div>
);

export default function App() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();
  return (
    <Router>

      <p>Dashboard routes</p>
      <p>
        {path}
        ,
        {' '}
        {url}
      </p>

      <Switch>
        <Route exact path={path}>
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}
