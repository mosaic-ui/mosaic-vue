<template>
  <i
      :id="cid"
      :style="styles"
      :data-testid="testId"
      :class="iconClassname"
  />
</template>

<script>
  import classnames from 'classnames'

  export default {
    name: 'MoIcon',
    props: {
      className: {
        type: String,
        default: ''
      },
      glyph: {
        type: String,
        default: ''
      },
      id: {
        type: [String, Number],
        default: ''
      },
      styles: {
        type: Object,
        default: null
      },
      testId: {
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
      iconClassname () {
        return classnames('mo-icon', {
          [`${this.glyph}`]: this.glyph,
          [`${this.classname}`]: this.classname
        })
      }
    },
    mounted () {
      this.cid = this.id || this._uid
    }
  }
</script>