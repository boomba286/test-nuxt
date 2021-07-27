<template>
  <div>
    <div class="app-house-header" :style="`background-image: url(${home.images[0]})`"></div>
    <div class="app-house-body">
      <img src="/images/icons/heart.svg" class="app-fav" />
      <h2 class="app-address">
        {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}
      </h2>
      <div class="app-amenities">
        <p>
          {{ pluralize(home.guests, "guests") }},
          {{ pluralize(home.bedrooms, "rooms") }},
          {{ pluralize(home.beds, "beds") }},
          {{ pluralize(home.bathrooms, "baths") }}
        </p>
        <p>{{ features }}</p>
      </div>
      <div class="app-flex">
        <div class="app-rating">
          {{ home.reviewValue }}
          <span>{{ home.reviewCount }}</span>
        </div>
        <div class="app-price">
          ${{ home.pricePerNight }}<span>/ night</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pluralize from '~/utils/pluralize'

export default {
  name: 'HomeCard',
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  computed: {
    features() {
      return this.home.features.slice(0, 3).join(', ')
    }
  },
  methods: {
    pluralize
  }
}
</script>