<template>
  <div :class="outerGridClass">
    <p>{{ label }}</p>
    <div class="custom-radio mb-1">
      <label>
        <input
          class="d-none"
          type="radio"
          :name="name"
          v-on:change="$emit('input', value === '' ? true : !value)"
        />
        <span>Yes</span>
      </label>
    </div>
    <div class="custom-radio mb-1">
      <label>
        <input
          class="d-none"
          type="radio"
          :name="name"
          v-on:change="$emit('input', value === '' ? false : !value)"
        />
        <span>No</span>
      </label>
    </div>
    <small
      data-testid="form-validation-error"
      v-if="hasError"
      class="form-text text-danger"
      >{{ errorMessage }}</small
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'radio'
    },
    name: {
      type: String
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorMessage: String,
    value: [String, Number],
    outerGridClass: {
      type: String,
      default: 'form-group mb-4'
    },
    pattern: String
  }
}
</script>
