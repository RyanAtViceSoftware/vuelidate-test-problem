<template>
  <ValidatedFormField v-bind="$attrs">
    <input
      class="form-control"
      :type="type"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :pattern="pattern"
      :maxlength="maxLength"
    />
  </ValidatedFormField>
</template>

<script>
import ValidatedFormField from './ValidatedFormField.vue'

export default {
  components: {
    ValidatedFormField
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    pattern: String,
    maxLength: Number
  }
}
</script>
