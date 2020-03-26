<template>
  <div>
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      loadMore: {
        type: Function,
        default: null
      },
      hasNextPage: {
        type: Boolean,
        default: true
      },
      loadThreshold: {
        type: Number,
        default: 2
      },
      observerOptions: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      infiniteScroll() {
        /** Intersection Observer API check */
        if (!'IntersectionObserver' in window) {
          console.log('Intersection Observer API is not supported with this browser. We\'ll be using the IntersectionObservers polyfill instead.')
          return
        }

        const defaultObserverOptions = {
          root: null,
          rootMargin: '0px',
          threshold: [0.25, 0.5, 0.75, 1]
        }

        const opts = Object.assign(defaultObserverOptions, this.observerOptions)
        const listItems = Array.from(document.querySelector(`.${this.$el}`).children)
        const showMoreThreshold = listItems.length - this.loadThreshold

        /** Intersection observer callback function fires the show more items callback when a threshold has been reached */
        const intersectionCallback = entries => {
          for (let i = 0; i < entries.length; i++) {
            let itemIndex = listItems.findIndex(item => item.id == entries[i].target.id)

            if (entries[i].intersectionRatio <= 0) return

            if (entries[i].intersectionRatio >= 1) {
              /**
               * If the current fully visible item index matches the show more threshold value,
               * and more items are still to load, instantiate the callback.
               */
              if (itemIndex === showMoreThreshold && this.hasNextPage) {
                this.loadMore()
              }
            }

            if (entries[i].intersectionRatio === 1) {
              /** Stop observing an item once it is visible */
              observers[itemIndex].unobserve(entries[i].target)
            }
          }
        }

        let observers = []

        /** Initialize intersection observers for each list item using the Intersection Observer API */
        for (let i = 0; i < listItems.length; i++) {
          observers[i] = new IntersectionObserver(intersectionCallback, opts)
          observers[i].observe(listItems[i])
        }
      }
    }
  }
</script>
