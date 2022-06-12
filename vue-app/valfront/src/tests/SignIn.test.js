/**
 * @vitest-environment happy-dom
 */

import { describe, expect, test, vi} from "vitest"
import { mount } from '@vue/test-utils'
import SignIn from '../views/SignIn.vue'
import { it } from "vitest"





const mockSignIn = vi.fn(() => Promise.resolve({
    user: {
        uid: "fakeUid"
    }
}))

const mockGetAuth = vi.fn()

vi.mock('firebase/auth', () => {
    return {
        getAuth: () => mockGetAuth,
        signInWithEmailAndPassword: () => mockSignIn,
    }
})




describe('Signin page', () =>{
    it('should render', () =>{
        const wrapper = mount(SignIn)
        expect(wrapper.find('h1').exists()).toBeTruthy()
        expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
        expect(wrapper.find('input[type="password"]').exists()).toBeTruthy()
        expect(wrapper.find('button').exists()).toBeTruthy()
    })

    it('should login', async () =>{

        const email = 'abc@gmail.com'
        const password = '123456'
        mockSignIn(mockGetAuth, email, password)
        expect(mockSignIn).toBeCalledWith(mockGetAuth, email, password)

        
        
    })
});