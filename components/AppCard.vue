<template>
  <article :class="['card', hasOutline, isHoverabe]">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    outline: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasOutline() {
      return this.outline ? '-outline' : ''
    },
    isHoverabe() {
      return this.hoverable ? '-hoverable' : ''
    }
  }
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  padding: $space-1 $space-2;
  border-radius: 6px;
  box-shadow: 0 0 0 transparent;
  color: $black;
  transition: all 0.3s ease-in-out;

  &.-outline {
    border: 1px solid #ddd;
    box-shadow: 0 0 0 transparent;
  }

  &.-hoverable {
    cursor: pointer;

    &:hover {
      box-shadow: 0 7px 14px rgba(50, 50, 50, 0.12);
    }
  }

  &__title {
    font-size: $font-3;
  }

  &__text {
    font-size: $font-1;

    &:last-of-type {
      margin-bottom: $space-2;
    }
  }
}
</style>
