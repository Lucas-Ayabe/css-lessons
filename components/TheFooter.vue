<template>
  <footer class="footer">
    <p class="footer__copy">
      Este site foi criado com o intuito de ensinar CSS.
    </p>
    <div class="footer__bar">
      <p class="logo">CSS Lessons</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  background: $primary;
  color: $white;
  text-align: center;
  margin-top: auto;

  &__copy {
    font-size: $font-1;
    padding: $space-3 $space-2;
  }

  &__bar {
    background: rgba(0, 0, 0, 0.2);
    padding: $space-1 $space-2;
  }
}
</style>
