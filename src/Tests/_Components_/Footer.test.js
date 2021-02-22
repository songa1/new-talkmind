import Footer from '../../Components/Layout/Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
    it('should return true when copyright text on the footer is rendered', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.contains(<p className='footcopy'>&copy; TalkMind 2021</p>)).toBe(true)
    })
})