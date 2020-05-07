<template>
  <nav :class="['header__nav', 'nav', aligment]">
    <ul class="nav__menu">
      <li class="nav__item">
        <TheNavLink @click="handleClick">Home</TheNavLink>
      </li>

      <li class="nav__item">
        <TheNavLink to="/lessons" @click="handleClick">Aulas</TheNavLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import TheNavLink from '~/components/TheNavLink'

export default {
  name: 'TheNav',
  components: {
    TheNavLink
  },
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
  },
  methods: {
    handleClick(payload) {
      this.$emit('changed', payload)
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
    background: $primary-light;
    opacity: 1;
    pointer-events: all;
    z-index: 999;
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

    &__menu {
      background: transparent;
    }
  }
}
</style>
