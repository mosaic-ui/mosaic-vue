<template>
  <button
      @click="onClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      :type="buttonType"
      :class="buttonBaseClass"
      :data-testid="testId"
      :disabled="disabled"
      :id="cid"
      :tabindex="tabIndex"
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
    name: 'MoButtonBase',
    props: {
      /** Toggles button highlighted active state */
      active: {
        type: Boolean,
        default: false
      },
      /** Button text to display. Defaults to "Save" */
      buttonText: {
        type: String,
        default: ButtonText.Save
      },
      /** Button type of 'button' or 'submit' */
      buttonType: {
        type: String,
        default: ButtonType.Button
      },
      /** Add a custom class */
      className: {
        type: String,
        default: ''
      },
      /** Button color */
      color: {
        type: String,
        default: ComponentColor.Default
      },
      /** component id */
      id: {
        type: [String, Number],
        default: ''
      },
      /** Square or rectangle */
      shape: {
        type: String,
        default: ButtonShape.Default
      },
      /** Button size */
      size: {
        type: String,
        default: ComponentSize.Small
      },
      /** Button status state default, loading, or disabled */
      status: {
        type: String,
        default: ComponentStatus.Default
      },
      /** Keyboard control tab order  */
      tabIndex: {
        type: Number,
        default: 0
      },
      /** Use for unit test purposes */
      testId: {
        type: String,
        default: ''
      },
      /** Text to be displayed on hover tooltip */
      titleText: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        cid: null
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

      disabled () {
        return this.status === ComponentStatus.Disabled || this.status === ComponentStatus.Loading
      }
    },

    mounted () {
      this.cid = this.id || this._uid
    },

    methods: {
      onClick (e) {
        /**
         * Passthroughs click event
         * @type {Event}
         */
        this.$emit('click', e)
      },
      onMouseEnter (e) {
        /**
         * Passthroughs mouseenter event
         * @type {Event}
         */
        this.$emit('mouseenter', e)
      },
      onMouseLeave (e) {
        /**
         * Passthroughs mouseleave event
         * @type {Event}
         */
        this.$emit('mouseleave', e)
      },
      onMouseOver (e) {
        /**
         * Passthroughs mouseover event
         * @type {Event}
         */
        this.$emit('mouseover', e)
      },
      onMouseOut (e) {
        /**
         * Passthroughs mouseout event
         * @type {Event}
         */
        this.$emit('mouseout', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../ButtonBase.scss';
</style>
