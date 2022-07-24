/**
 * @vitest-environment happy-dom
 */

 import { describe, expect, test} from "vitest"
 import { mount } from '@vue/test-utils'
 import Feed from '../views/Feed.vue'
 import { it } from "vitest"
 

 test('selection exists', ()=>{
    const { getByText } = render(<Text />);
    const selection = getByText("Select a Match");
    expect(selection).toBeTruthy()
 })