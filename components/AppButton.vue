<template>
  <a
    v-if="href !== ''"
    :href="href"
    :class="['button', colorVariant, isRounded, isFullRounded, isRaised]"
    ><slot></slot
  ></a>
  <nuxt-link
    v-else-if="to !== ''"
    :to="to"
    :class="['button', colorVariant, isRounded, isFullRounded, isRaised]"
    ><slot></slot
  ></nuxt-link>
  <button
    v-else
    :class="['button', colorVariant, isRounded, isFullRounded, isRaised]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    fullRounded: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorVariant() {
      return `-${this.color}`
    },
    isRounded() {
      return this.rounded ? '-rounded' : ''
    },
    isFullRounded() {
      return this.fullRounded ? '-full-rounded' : ''
    },
    isRaised() {
      return this.raised ? '-raised' : ''
    }
  }
}
</script>

<style lang="scss">
.button {
  @extend %button;

  &.-rounded {
    border-radius: $radius-1;
  }

  &.-full-rounded {
    border-radius: 100px;
  }

  &.-raised {
    box-shadow: 0 1px 2px rgba(50, 50, 50, 0.2), 0 3px 6px rgba(50, 50, 50, 0.3);
  }

  @each $name, $color in $colors {
    &.-#{$name} {
      background: $color;
      color: getContrastYIQ($color);

      &.-raised {
        box-shadow: 0 2px 4px getRgba(#555, 0.2), 0 4px 8px getRgba($color, 0.4);

        &:hover {
          box-shadow: 0 2px 4px getRgba(#555, 0.3),
            0 5px 12px getRgba($color, 0.4);
        }

        &:active {
          box-shadow: 0 2px 4px getRgba(#555, 0.3),
            0 7px 14px getRgba($color, 0.4);
        }
      }

      &:hover {
        background: mix($white, $color, 10%);
      }

      &:active {
        background: mix($white, $color, 20%);
      }
    }
  }
}
</style>
