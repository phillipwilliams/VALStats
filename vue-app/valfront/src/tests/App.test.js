/**
 * @vitest-environment happy-dom
 */

import { describe, expect, test} from "vitest"
import { mount, RouterLinkStub } from '@vue/test-utils'
import Appvue from '../App.vue'
import { it } from "vitest"
import { vi } from "vitest"


const mockGetAuth = vi.fn()
const mockSignOut = vi.fn()

vi.mock('firebase/auth', () => {
    return {
        getAuth: () => mockGetAuth,
        signOut: () => mockSignOut
    }
})

 

describe('Appvue', () =>{
    it('should render', () =>{
        const wrapper = mount(Appvue, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.find('header').exists()).toBeTruthy()
        expect(wrapper.text()).toContain("VALSTATS").toBeTruthy()
        expect(wrapper.text()).toContain("Feed").toBeTruthy()
        expect(wrapper.text()).toContain("Register").toBeTruthy()
        expect(wrapper.text()).toContain("Login").toBeTruthy()
    })
});

