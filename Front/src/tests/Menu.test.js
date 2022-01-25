/* Package imports  */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Burger from '../components/Header/burger/index';


configure({ adapter: new Adapter() });

describe('Burger', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Burger debug />);
    expect(component).toMatchSnapshot();
  });
});

