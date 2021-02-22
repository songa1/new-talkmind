import Dashboard from '../../Components/Dashboard';
import { shallow } from 'enzyme';

describe('Dashboard', () =>{
    it('should return true if Dashboard title is rendered', () =>{
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.contains(<h1>Dashboard</h1>)).toBe(true);
    })
});