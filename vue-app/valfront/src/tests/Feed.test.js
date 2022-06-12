/**
 * @vitest-environment happy-dom
 */

 import { describe, expect, test} from "vitest"
 import { mount } from '@vue/test-utils'
 import Feed from '../views/Feed.vue'
 import { it } from "vitest"
 
 
 
 describe('Feed page', () =>{
     it('should render', () =>{
         const wrapper = mount(Feed)
         expect(wrapper.find('h1').exists()).toBeTruthy()
     })
 });