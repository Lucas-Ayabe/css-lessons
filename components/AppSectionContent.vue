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

  & + & {
    padding-left: $space-2;
  }
}
</style>
