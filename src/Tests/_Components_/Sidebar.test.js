import Enzyme, { shallow } from 'enzyme';
import Sidebar from '../../Components/Layout/Sidebar';

describe('Sidebar', ()=> {
    it('Should check if sidebar has 3 children', ()=> {
        const wrapper = shallow(<Sidebar/>);
        const side = wrapper.find('div');
        expect(side.children()).toHaveLength(3);
    })
})