/**
 * @vitest-environment happy-dom
 */

 import { describe, expect, test} from "vitest"
 import { mount } from '@vue/test-utils'
 import Home from '../views/Home.vue'
 import { it } from "vitest"
 
 
 
 describe('Home page', () =>{
     it('should render', () =>{
         const wrapper = mount(Home)
         expect(wrapper.find('h1').exists()).toBeFalsy()
     })
 });