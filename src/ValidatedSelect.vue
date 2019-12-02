<template>
  <ValidatedFormField v-bind="$attrs">
    <select
      class="form-control pr-5"
      v-on:change="$emit('input', $event.target.value)"
    >
      <option value="">{{ defaultOption }}</option>
      <!-- Added default option -->
      <option v-for="option in optionList" :key="option" :value="option">{{
        option
      }}</option>
    </select>
  </ValidatedFormField>
</template>

<script>
import ValidatedFormField from './ValidatedFormField.vue'

export default {
  components: {
    ValidatedFormField
  },
  props: {
    optionList: {
      type: Array,
      default() {
        return []
      }
    },
    defaultOption: {
      type: String,
      default: 'Please select one'
    }
  }
}
</script>
