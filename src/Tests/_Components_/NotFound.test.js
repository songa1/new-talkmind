import Enzyme, { shallow } from 'enzyme';
import NotFound from '../../Components/NotFound';
import {Link} from 'react-router-dom';


describe('Not Found', () =>{
    it('should return true when 404 for not found in h1 is rendered', () =>{
        const wrapper = shallow(<NotFound />);
        expect(wrapper.contains(<h1>404</h1>)).toBe(true);
    })
    it('should return true if text(this page is not found) in paragraph is rendered', () =>{
        const wrapper = shallow(<NotFound />);
        expect(wrapper.contains(<p>Sorry, this page is not found!</p>)).toBe(true);
    })
    it('should return text to redirect you to home from not found page',() =>{
        const wrapper = shallow(<NotFound />);
        expect(wrapper.contains(<Link to='/'>Go back to Home</Link>)).toBe(true);
    })
})