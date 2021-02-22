import { shallow } from 'enzyme';
import Navbar from '../../Components/Layout/Navbar';

describe('Navbar', () => {
    it('Should check if navbar has 2 children', () => {
        const wrapper = shallow(<Navbar/>);
        const nav = wrapper.find('nav');
        expect(nav.children()).toHaveLength(2)
    })
    it('return true when brand name is rendered', () => {
        const wrapper = shallow(<Navbar/>);
        const nav = wrapper.find('nav');
        expect(nav.contains(<h1 className="branding">TalkMind</h1>)).toBe(true);
    })
    it('should render nav list items', () => {
        const wrapper = shallow(<Navbar/>);
        const nav = wrapper.find('nav ul');
        expect(nav.children()).toHaveLength(3);
    })
})