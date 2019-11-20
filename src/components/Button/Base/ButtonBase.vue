<template>
  <button
      @click="onClick"
      :type="buttonType"
      :class="buttonBaseClass"
      :data-testid="testID"
      :disabled="disabled"
      :id="id"
      :tabIndex="!!tabIndex ? tabIndex : 0"
      :title="titleText">
    <!-- @slot Default to buttonText prop -->
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script>
  import {
    ComponentColor,
    ComponentSize,
    ButtonShape,
    ComponentStatus,
    ButtonType,
    ButtonText
  } from '../../../types'

  import classnames from 'classnames'

  export default {
    name: 'button-base',
    props: {
      /** Text to be displayed on hover tooltip */
      titleText: {
        type: String,
        default: ''
      },
      /** Keyboard control tab order  */
      tabIndex: {
        type: Number,
        default: 0
      },
      /** Button color */
      color: {
        type: String,
        default: ComponentColor.Default
      },
      /** Button size */
      size: {
        type: String,
        default: ComponentSize.Medium
      },
      /** Square or rectangle */
      shape: {
        type: String,
        default: ButtonShape.Default
      },
      /** Button status state default, loading, or disabled */
      status: {
        type: String,
        default: ComponentStatus.Default
      },
      /** Toggles button highlighted active state */
      active: {
        type: Boolean,
        default: false
      },
      /** Button type of 'button' or 'submit' */
      buttonType: {
        type: String,
        default: ButtonType.Button
      },
      /** Button text to display. Defaults to "Save" */
      buttonText: {
        type: String,
        default: ButtonText.Save
      },
      /** Add a custom class */
      className: {
        type: String,
        default: ''
      },
      /** Use for unit test purposes */
      testID: {
        type: String,
        default: ''
      },
      /** component id */
      id: {
        type: String,
        default: ''
      }
    },

    computed: {
      buttonBaseClass () {
        const active = this.active

        return classnames(
          `mo-button mo-button-${this.size} mo-button-${this.color}`,
          {
            'mo-button-square': this.shape === ButtonShape.Square,
            'mo-button-stretch': this.shape === ButtonShape.StretchToFit,
            'mo-button--loading': this.status === ComponentStatus.Loading,
            'mo-button--disabled': this.status === ComponentStatus.Disabled,
            active,
            [`${this.className}`]: this.className
          }
        )
      },

      disabled() {
        return this.status === ComponentStatus.Disabled || this.status === ComponentStatus.Loading
      }
    },

    methods: {
      onClick (e) {
        /**
         * Passthroughs click event
         * @type {Event}
         */
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../ButtonBase';
</style>
