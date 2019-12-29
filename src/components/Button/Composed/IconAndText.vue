<template>
  <div v-if="placeIconAfterText">
    <span class="mo-button-label">{{ text }}</span>
    <icon
        :glyph="icon"
        :class-name="'mo-button-icon'">
    </icon>
  </div>
  <div v-else>
    <icon
        :glyph="icon"
        :class-name="'mo-button-icon'">
    </icon>
    <span class="mo-button-label">{{ text }}</span>
  </div>
</template>

<script>
  import Icon from '../../Icon/Base/Icon.vue'

  export default {
    name: 'MoIconAndText',
    props: {
      icon: {
        type: String,
        default: ''
      },
      placeIconAfterText: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: 'Submit'
      }
    },
    components: {
      Icon
    }
  }
</script>
