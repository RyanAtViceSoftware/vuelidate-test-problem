<template>
  <div :class="divClass">
    <div :class="divFormGroupClass">
      <label>{{ label }}</label>
      <slot></slot>
      <small
        data-testid="form-validation-error"
        v-if="hasError"
        class="form-text text-danger"
      >
        {{ errorMessage }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorMessage: String,
    divClass: {
      type: String,
      default: 'col-md-6'
    },
    divFormGroupClass: {
      type: String,
      default: 'form-group'
    }
  }
}
</script>
