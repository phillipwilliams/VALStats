/**
 * @vitest-environment happy-dom
 */

 import { describe, expect, test} from "vitest"
 import { mount } from '@vue/test-utils'
 import Register from '../views/Register.vue'
 import { it } from "vitest"


 
const mockSignUp = vi.fn(() => {
    return Promise.resolve({
        user: {
            uid: "fakeuid",
        },
    });
})


const mockGetAuth = vi.fn()

vi.mock('firebase/auth', () => {
    return {
        getAuth: () => mockGetAuth,
        createUserWithEmailAndPassword: () => mockSignUp
    }
})
 
 
 
 describe('Register page', () =>{
     it('should render', () =>{
         const wrapper = mount(Register)
        expect(wrapper.find('h1').exists()).toBeTruthy()
        expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
        expect(wrapper.find('input[type="password"]').exists()).toBeTruthy()
        expect(wrapper.find('button').exists()).toBeTruthy()
     })

     it('should register', () =>{
        const email = 'abc@gmail.com'
        const password = '123456'
        mockSignUp(mockGetAuth, email, password)
        expect(mockSignUp).toBeCalledWith(mockGetAuth, email, password)
     })

     it('should be logged in', ()=>{
        const email = 'abc'
        const password = '123456'
        mockSignUp(mockGetAuth, email, password)
        expect(mockSignUp).toBeCalledWith(mockGetAuth, email, password)
        
     })
 });

