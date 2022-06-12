/**
 * @vitest-environment happy-dom
 */

 import { describe, expect, test} from "vitest"
 import { mount } from '@vue/test-utils'
 import Appvue from '../App.vue'
 import { it } from "vitest"
 import {initializeApp} from 'firebase/app'

/*

 describe('Appvue', () =>{
     it('should render', () =>{
         const wrapper = mount(Appvue)
         expect(wrapper.find('nav').exists()).toBeTruthy()
     })
 });

 */