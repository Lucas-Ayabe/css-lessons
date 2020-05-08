<template>
  <section :class="['section', alignment, isHero, isHalf, isReverse]">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    align: {
      type: String,
      default: 'center'
    },
    hero: {
      type: Boolean,
      default: false
    },
    half: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    alignment() {
      return `-${this.align}`
    },
    isHero() {
      return this.hero ? '-hero' : ''
    },
    isHalf() {
      return this.half ? '-half' : ''
    },
    isReverse() {
      return this.reverse ? '-reverse' : ''
    }
  }
}
</script>

<style lang="scss">
.section {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;

  & + & {
    padding-top: 0;
  }

  &.-reverse {
    flex-direction: column-reverse;
  }

  &.-start {
    align-items: flex-start;
  }

  &.-center {
    align-items: center;
  }

  &.-end {
    align-items: flex-end;
  }

  &.-hero {
    min-height: 100vh;
  }

  &.-half {
    min-height: 60vh;
  }

  &__image {
    max-width: 35vmax;

    &.-vertical {
      max-width: initial;
      max-height: 45vmin;
      margin: auto;

      @include min-width(map-get($breakpoints, 'md')) {
        margin: 0;
        margin-right: auto;
      }
    }
  }

  &__title {
    font-size: $font-4;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: $space-1;
  }

  &__text {
    font-size: $font-1;
    line-height: 1.4;
    margin-bottom: $space-1;
  }

  &__button {
    align-self: center;
  }

  @include min-width(map-get($breakpoints, 'md')) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    &.-reverse {
      flex-direction: row-reverse;
    }

    &__button {
      align-self: flex-start;
    }
  }
}
</style>
