<template>
  <ul :class="['card-list', isVertical]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'AppCardList',
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isVertical() {
      return this.vertical ? 'is-vertical' : ''
    }
  }
}
</script>

<style lang="scss">
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;

  &.is-vertical {
    display: block;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: inset 0 0 4px rgba(50, 50, 50, 0.2);
    border-radius: 6px;
    overflow-y: auto;
    max-height: 50vh;
  }

  .card-list__item {
    margin-bottom: $space-2;
  }
}
</style>
