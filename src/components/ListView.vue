<template>
  <div class="list-view">
    <b-container>
      <div class="filter">
        <div class="filter-ctn">
          <div class="location">
            <b-button v-on:click="searchData"><v-icon name="search" class="icon-search"></v-icon></b-button>
            <b-form-input v-model="location" type="text" placeholder="Enter your Location" />
          </div>
          <HotelDatePicker v-model="date_select" DatePickerID="01" class="width-100 mb-15" />
          <div class="guests">
            <v-icon name="users" class="icon-users"></v-icon>
            <b-form-input id="input1" v-model="name" trim />
          </div>
        </div>
      </div>
      <div class="tabs-show">
        <b-tabs content-class="mt-3">
          <b-tab title="Filter" active>
            <b-alert show dismissible>
              <v-icon name="clock" style="width: 40px;"></v-icon>
              <p><strong>Hurry up! </strong> Only 17% of Cardiff properties are left for your dates.</p>
            </b-alert>
          </b-tab>
          <b-tab title="Map">I'm the second tab content</b-tab>
        </b-tabs>
      </div>
      <div class="list-ctn">
        <div class="list-item" v-for="item in listData" :key="item">
          <div class="item-image">
            <img v-bind:src="item.image" alt="">
          </div>
          <div class="item-info">
            <div class="info-product">
              <h6 class="title">
                <v-icon name="home"></v-icon>
                <span>{{ item.times }}</span>
              </h6>
              <h3>{{ item.title }}</h3>
              <p class="address">{{ item.address }}</p>
              <p class="location">
                <v-icon name="map-pin"></v-icon>
                {{ item.location }}</p>
              <div class="chips">
                <b-badge pill variant="light" v-for="chip in item.cancellations" :key="chip" >{{ chip }}</b-badge>
              </div>
            </div>
            <div class="info-price">
              <h3>Exceptional! {{ item.exceptional }}</h3>
              <div class="price-review">
                <p><strong>{{ item.price }}</strong> per night</p>
                <star-rating class="ratings" :rating="item.rating" style="display: inline-block;"></star-rating>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
// eslint-disable no-new
// eslint-disable
// eslint-disable-next-line
export default {
  data () {
    return {
      msg: 'ahihi',
      location: '',
      date_select: '',
      rating: 5,
      name: '',
      listData: [
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 12 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin',
          location: '12.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '1/5',
          price: 12,
          rating: 2
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 44 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '56.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '5/5',
          price: 44,
          rating: 4
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 48 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '16.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '1/5',
          price: 56,
          rating: 0
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 48 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '16.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '1/5',
          price: 56,
          rating: 0
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 48 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '16.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '1/5',
          price: 56,
          rating: 0
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 48 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '16.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '1/5',
          price: 56,
          rating: 0
        }
      ]
    }
  },
  methods: {
    searchData () {
      this.listData = [
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 12 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin',
          location: '12.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '1/5',
          price: 12,
          rating: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/list-view.scss';
</style>
