<template>
  <div class="section__content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppSectionContent'
}
</script>

<style lang="scss" scoped>
.section__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 100%;

  & + & {
    margin-top: $space-2;

    @include min-width(map-get($breakpoints, 'md')) {
      margin-top: 0;
      margin-left: $space-2;
    }
  }
}
</style>
