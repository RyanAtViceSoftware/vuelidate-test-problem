<template>
  <div data-testid="general-information-form" class="row">
    <div class="col-md-4">
      <aside class="left-sidebar-main">
        <h4 class="lead mb-3">Why Do We Need This?</h4>

        <p class="f-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          consequat lorem, sed consectetur sapien. Mauris iaculis elit a dolor
          semper posuere. Sed id bibendum arcu. Cras semper luctus turpis vitae
          varius. Pellentesque in velit metus. Quisque egestas nunc felis, nec
          pharetra nunc condimentum at.
        </p>
      </aside>
    </div>
    <div class="col-md-8">
      <p class="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
        tempor urna, sit amet porta diam. Suspendisse lectus ante, venenatis ut
        rutrum ac, porta in metus. Aliquam ullamcorper tempus dapibus.
      </p>
      <div class="spacer"></div>
      <div class="content">
        <div class="row">
          <ValidatedSelect
            label="Your Prefix"
            v-model="general_informations_form.prefix"
            :optionList="general_informations_form.prefixList"
            divClass="col-md-6"
          />
          <ValidatedInput
            data-testid="general-info-first-name"
            label="Your First Name*"
            type="text"
            placeholder="First Name"
            v-model="general_informations_form.first_name"
            :hasError="$v.general_informations_form.first_name.$error"
            errorMessage="This first name is invalid"
          />
        </div>

        <div class="row">
          <ValidatedInput
            data-testid="general-info-last-name"
            label="Your Last Name*"
            type="text"
            placeholder="Last Name"
            v-model="general_informations_form.last_name"
            :hasError="$v.general_informations_form.last_name.$error"
            errorMessage="This last name is invalid"
            divClass="col-md-6"
          />
          <ValidatedSelect
            label="Your Suffix"
            v-model="general_informations_form.suffix"
            :optionList="general_informations_form.suffixList"
            divClass="col-md-6"
          />
        </div>

        <div class="row">
          <ValidatedInput
            data-testid="general-info-madien-name"
            label="Your Maiden Name*"
            type="text"
            placeholder="Maiden Name"
            v-model="general_informations_form.maiden_name"
            :hasError="$v.general_informations_form.maiden_name.$error"
            errorMessage="This maiden name is invalid"
            divClass="col-md-6"
          />
          <ValidatedInput
            data-testid="general-info-email-address"
            label="Your Email Address*"
            type="text"
            placeholder="Email Address"
            v-model="general_informations_form.email"
            :hasError="$v.general_informations_form.email.$error"
            errorMessage="This email is invalid"
            divClass="col-md-6"
          />
        </div>

        <div class="row">
          <ValidatedInput
            data-testid="general-info-social-security"
            label="Your Social Security Number*"
            type="tel"
            placeholder="Social Security Number"
            v-model="general_informations_form.social_security"
            :hasError="$v.general_informations_form.social_security.$error"
            errorMessage="This social security is invalid"
            divClass="col-md-6"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
            :maxLength="10"
          />
          <ValidatedInput
            data-testid="general-info-social-security-verify"
            label="Verify Your Social Security Number*"
            type="tel"
            placeholder="Confirm Social Security Number"
            v-model="general_informations_form.confirm_social_security"
            :hasError="
              $v.general_informations_form.confirm_social_security.$error
            "
            errorMessage="This confirm social security is invalid"
            divClass="col-md-6"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
            :maxLength="10"
          />
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Date of Birth*</label>
              <datepicker
                data-testid="general-info-date-of-birth"
                class="form-control  p-0"
                type="text"
                placeholder="Date of Birth*"
                v-model="general_informations_form.date_of_birth"
              ></datepicker>
              <small
                v-if="$v.general_informations_form.date_of_birth.$error"
                class="form-text text-danger"
              >
                This date is invalid
              </small>
            </div>
          </div>
        </div>
        <div class="row">
          {{ $v.general_informations_form.$invalid }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ValidatedInput from './ValidatedInput.vue'
import ValidatedSelect from './ValidatedSelect.vue'
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  sameAs,
  numeric,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  props: ['clickedNext', 'currentStep'],
  mixins: [validationMixin],
  components: {
    Datepicker,
    ValidatedInput,
    ValidatedSelect
  },
  data() {
    return {
      general_informations_form: {
        first_name: '',
        last_name: '',
        maiden_name: '',
        email: '',
        social_security: '',
        confirm_social_security: '',
        date_of_birth: '',
        prefix: '',
        suffix: '',
        prefixList: [
          //currently these are hardcoded
          'Mr',
          'Mrs',
          'Ms'
        ],
        suffixList: ['I', 'II', 'III', 'IV']
      }
    }
  },
  validations: {
    general_informations_form: {
      first_name: {
        required
      },
      last_name: {
        required
      },
      maiden_name: {
        required
      },
      email: {
        required,
        email
      },
      social_security: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },
      confirm_social_security: {
        sameAsSocialSecurity: sameAs('social_security'),
        maxLength: maxLength(10)
      },
      date_of_birth: {
        required
      }
    }
  },
  watch: {
    $v: {
      handler: function(val) {
        // console.log(JSON.stringify(val))
        console.log(val.$invalid)
        if (!val.$invalid) {
          //Post to backend as soon as all the values are validated
          this.saveApplicationData({
            generalInformation: this.general_informations_form
          })
          this.$emit('can-continue', { value: true })
        } else {
          this.$emit('can-continue', { value: false })
        }
      },
      deep: true
    },
    clickedNext(val) {
      if (val === true) {
        this.$v.general_informations_form.$touch()
      }
    }
  },
  methods: {
    ...mapActions({
      saveApplicationData: 'application/saveApplicationData'
    })
  }
}
</script>
<style>
.is-danger {
  color: #e04124;
}

.vdp-datepicker input {
  height: 55px !important;
  font-weight: 500;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0px;
}
</style>
