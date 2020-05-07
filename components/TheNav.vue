<template>
  <nav :class="['header__nav', 'nav', aligment]">
    <ul class="nav__menu">
      <li class="nav__item">
        <router-link to="/" class="nav__link">Home</router-link>
      </li>

      <li class="nav__item">
        <router-link to="/" class="nav__link">Aulas</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNav',
  props: {
    align: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    aligment() {
      return `-${this.align}`
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  background: transparent;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  z-index: -999;

  &.is-active {
    background: $primary;
    opacity: 1;
    pointer-events: all;
    z-index: 999;
  }

  @include min-width(map-get($breakpoints, 'md')) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex: 5 1 auto;
    position: static;
    opacity: 1;
    pointer-events: all;
    z-index: 999;

    &.-left {
      justify-content: flex-start;
      margin-left: $space-2;
    }

    &.-right {
      justify-content: flex-end;
    }
  }

  &__menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include min-width(map-get($breakpoints, 'md')) {
      flex-direction: row;
    }
  }

  &__item {
    & + & {
      margin-top: $space-1;

      @include min-width(map-get($breakpoints, 'md')) {
        margin-top: 0;
        margin-left: $space-1;
      }
    }
  }

  &__link {
    @extend %button--rounded;
    font-size: $font-1;
    color: $white;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &:active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
