import {shallow} from "enzyme";
import 'enzyme'

it('done', () => {
    const Login = shallow(<Login />)
    expect(Login.find('div')).toHaveLength(1)
})