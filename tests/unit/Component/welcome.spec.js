import { shallowMount, mount } from '@vue/test-utils'
import Welcome from '@/components/Home/Welcome.vue'

describe('Welcome.vue', () => {
    
  beforeEach(() => {
    let wrapper = mount(Welcome)
  });    
    
  it('renders Welcome.vue ', () => {
    const wrapper = mount(Welcome)
    expect(wrapper.exists()).toBe(true)    
  })    
    
  it('renders props.msg in Welcome.vue when passed', () => {
    const msg = 'Witaj w przykładowej aplikacji Vue.js'
    const wrapper = shallowMount(Welcome, {
      props: { msg }
    })
    expect(wrapper.text()).toBe(msg)
  })
})
