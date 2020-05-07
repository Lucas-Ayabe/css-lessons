<template>
  <a v-if="href !== ''" :href="href" class="nav__link" @click.native="emitClick"
    ><slot></slot
  ></a>
  <router-link v-else :to="to" class="nav__link" @click.native="emitClick"
    ><slot></slot
  ></router-link>
</template>

<script>
export default {
  name: 'TheNavLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    }
  },
  methods: {
    emitClick(event) {
      this.$emit('click', { event, href: this.href, to: this.to })
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
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
