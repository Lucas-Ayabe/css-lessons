<template>
  <header :class="{ header: true, 'is-fixed': fixed }">
    <div class="header__container container">
      <nuxt-link to="/" class="header__logo">CSS Lessons</nuxt-link>

      <button
        :class="{
          'nav-toggler': true,
          '-burger': true,
          'is-active': isNavOpen
        }"
        @click="toggleNav"
      >
        <span class="nav-toggler__item"></span>
        <span class="nav-toggler__item"></span>
        <span class="nav-toggler__item"></span>
      </button>
      <TheNav
        align="right"
        :class="{ 'is-active': isNavOpen }"
        @changed="toggleNav"
      />
    </div>
  </header>
</template>

<script>
import TheNav from '~/components/TheNav'
export default {
  name: 'TheHeader',
  components: {
    TheNav
  },
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>

<style lang="scss">
.header {
  &,
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: $primary-light;
    height: 80px;
  }

  &.is-fixed {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;

    & + * {
      margin-top: 80px;
    }
  }

  &__container {
    background: transparent;
  }

  &__logo {
    vertical-align: middle;
    line-height: 1;
    font-size: $font-4;
    color: $white;
    flex: 0;
    white-space: nowrap;
  }
}

.nav-toggler {
  position: relative;
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;

  &.-burger {
    width: 30px;
    height: 19px;
    z-index: 1000;

    @include min-width(map-get($breakpoints, 'md')) {
      display: none;
    }

    .nav-toggler__item {
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
      background: #fff;
      border-radius: 100px;
      cursor: pointer;
      transform: translate3d(0, 0, 0) rotate(0);
      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: 8px;
      }

      &:nth-child(3) {
        top: 16px;
      }
    }

    &.is-active .nav-toggler__item {
      top: 50%;

      &:nth-child(1) {
        transform: translate3d(0, -50%, 0) rotate(45deg);
      }

      &:nth-child(2) {
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }

      &:nth-child(3) {
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }
    }
  }
}
</style>
