import { shallowMount, mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
    
  beforeEach(() => {
    let wrapper = mount(About)
  });    
    
  it('renders About.vue ', () => {
    const wrapper = mount(About)
    expect(wrapper.exists()).toBe(true)    
  })    
    
  it('renders props.msg in About.vue when passed', () => {
    const msg = 'Informacje o aplikacji !!'
    const wrapper = shallowMount(About, {
      props: { msg }
    })
    expect(wrapper.text()).toBe(msg)
  })
})
