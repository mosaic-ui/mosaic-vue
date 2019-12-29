<template>
  <mo-button-base
      @click="onClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      :active="active"
      :button-type="buttonType"
      :class-name="className"
      :color="color"
      :id="cid"
      :shape="shape"
      :size="size"
      :status="status"
      :tab-index="tabIndex"
      :test-id="testID"
      :title-text="titleText">
    <mo-icon-and-text
        :icon="icon"
        :place-icon-after-text="placeIconAfterText"
        :text="text">
    </mo-icon-and-text>
    <div v-if="loading" :class="spinnerClass"/>
  </mo-button-base>
</template>

<script>
  import MoButtonBase from '../Base/ButtonBase.vue'
  import MoIconAndText from './IconAndText.vue'

  import {
    ButtonShape,
    ButtonText,
    ButtonType,
    ComponentColor,
    ComponentSize,
    ComponentStatus,
    IconFont
  } from '../../../types'

  export default {
    name: 'MoButton',
    components: {
      MoButtonBase,
      MoIconAndText
    },
    props: {
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
      /** Button color */
      color: {
        type: String,
        default: ComponentColor.Default
      },
      /** Add a custom class */
      className: {
        type: String,
        default: ''
      },
      /** Icon */
      icon: {
        type: String,
        default: ''
      },
      /** component id */
      id: {
        type: [String, Number],
        default: ''
      },
      /** Reverse ordering of text and icon */
      placeIconAfterText: {
        type: Boolean,
        default: false
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
      testID: {
        type: String,
        default: 'button'
      },
      text: {
        type: String,
        default: ButtonText.Default
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
    mounted () {
      this.cid = this.id || this._uid
    },
    computed: {
      loading () {
        return this.status === ComponentStatus.Loading
      },
      spinnerClass () {
        return `mo-button-spinner mo-button-spinner--${this.size}`
      }
    },
    methods: {
      onClick(e) {
        this.$emit('click', e)
      },
      onMouseEnter(e) {
        this.$emit('mouseenter', e)
      },
      onMouseOver(e) {
        this.$emit('mouseover', e)
      },
      onMouseOut(e) {
        this.$emit('mouseout', e)
      },
      onMouseLeave(e) {
        this.$emit('mouseleave', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../Button.scss';
</style>
