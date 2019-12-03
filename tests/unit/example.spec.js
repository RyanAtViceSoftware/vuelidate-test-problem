import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from 'vue-router'
import App from "../../src/App";
import router from "../../src/router";
import store from "../../src/store";
import GeneralInformationForm from "../../src/GeneralInformationForm.vue"
import {
  expectByTestId,
  expectAllByTestId,
  expectNoneByTestId,
  expectBySelector,
  expectValidForm
} from './expect'
import waitForExpect from 'wait-for-expect'


describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", async () => {
    const localVue = createLocalVue()

    localVue.config.productionTip = false;

    localVue.use(VueRouter)

    const wrapper = mount(App, {
      router,
      localVue,
      store
    })

    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.is(App)).toBeTruthy()

    const generalInformationForm = expectBySelector(
      wrapper,
      GeneralInformationForm
    )

    expect(generalInformationForm.vm.$v.general_informations_form.$invalid).toEqual(true)

    expectByTestId(wrapper, 'general-info-first-name')
    .find('input')
    .setValue('first name')
    expectByTestId(wrapper, 'general-info-last-name')
      .find('input')
      .setValue('last name')
    expectByTestId(wrapper, 'general-info-madien-name')
      .find('input')
      .setValue('madien name')
    expectByTestId(wrapper, 'general-info-email-address')
      .find('input')
      .setValue('first@name.com')
    expectByTestId(wrapper, 'general-info-social-security')
      .find('input')
      .setValue('4443322222')
    expectByTestId(wrapper, 'general-info-social-security-verify')
      .find('input')
      .setValue('4443322222')
    expectByTestId(wrapper, 'general-info-date-of-birth').vm.setDate(
      new Date(2016, 9, 15)
    )

    expectNoneByTestId(wrapper, 'form-validation-error')

    expectValidForm(generalInformationForm.vm.$v.general_informations_form)

    console.log(
      JSON.stringify(generalInformationForm.vm.$v)
    )

    // Note that waitForExpect will move to the next tick of the Javascript event loop
    // and then call the function it is passed. It will do this over and over again 
    // until it timesout. This is a better alternative to vue's `nextTick()` IMHO as 
    // you don't have to worry about waiting for multiple ticks.
    await waitForExpect(() => expect(generalInformationForm.vm.$v.$invalid).toEqual(false))
  });
});
