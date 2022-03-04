import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('Render components', () => {
  const tree = renderer.create(<Router><NavBar /></Router>);
  expect(tree).toMatchSnapshot();
});
