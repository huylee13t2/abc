<template>
  <div class="list-view">
    <b-container>
      <div class="filter">
        <div class="filter-ctn">
          <div class="location">
            <v-icon name="search" class="icon-search"></v-icon>
            <b-form-input v-model="text1" type="text" placeholder="Enter your Location" />
          </div>
          <HotelDatePicker DatePickerID="01" class="width-100 mb-15" />
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
        <div class="list-item">
          <div class="item-image">
            <img src="https://picsum.photos/1024/480/?image=52" alt="">
          </div>
          <div class="item-info">
            <div class="info-product">
              <h6 class="title">
                <v-icon name="home"></v-icon>
                <span>Viewed 48 times ...</span>
              </h6>
              <h3>'Pinelodge' - SELF CATERING LODGE - LLANTRAISANT ...</h3>
              <p class="address">Cabin - 1BR - 1BA -Sleep 2</p>
              <p class="location">
                <v-icon name="map-pin"></v-icon>
                16.4 km to Cardiff centre</p>
              <div class="chips">
                <b-badge pill variant="light">Free Cancellation</b-badge>
              </div>
            </div>
            <div class="info-price">
              <h3>Exceptional! 5/5</h3>
              <div class="price-review">
                <p><strong>$56</strong> per night</p>
                <star-rating class="ratings" :rating="rating" style="display: inline-block;"></star-rating>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="item-image">
            <img src="https://picsum.photos/1024/480/?image=52" alt="">
          </div>
          <div class="item-info">
            <div class="info-product">
              <h6 class="title">
                <v-icon name="home"></v-icon>
                <span>Viewed 48 times ...</span>
              </h6>
              <h3>'Pinelodge' - SELF CATERING LODGE - LLANTRAISANT ...</h3>
              <p class="address">Cabin - 1BR - 1BA -Sleep 2</p>
              <p class="location">
                <v-icon name="map-pin"></v-icon>
                16.4 km to Cardiff centre</p>
              <div class="chips">
                <b-badge pill variant="light">Free Cancellation</b-badge>
              </div>
            </div>
            <div class="info-price">
              <h3>Exceptional! 5/5</h3>
              <div class="price-review">
                <p><strong>$56</strong> per night</p>
                <star-rating class="ratings" :rating="rating" style="display: inline-block;"></star-rating>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="item-image">
            <img src="https://picsum.photos/1024/480/?image=52" alt="">
          </div>
          <div class="item-info">
            <div class="info-product">
              <h6 class="title">
                <v-icon name="home"></v-icon>
                <span>Viewed 48 times ...</span>
              </h6>
              <h3>'Pinelodge' - SELF CATERING LODGE - LLANTRAISANT ...</h3>
              <p class="address">Cabin - 1BR - 1BA -Sleep 2</p>
              <p class="location">
                <v-icon name="map-pin"></v-icon>
                16.4 km to Cardiff centre</p>
              <div class="chips">
                <b-badge pill variant="light">Free Cancellation</b-badge>
              </div>
            </div>
            <div class="info-price">
              <h3>Exceptional! 5/5</h3>
              <div class="price-review">
                <p><strong>$56</strong> per night</p>
                <star-rating class="ratings" :rating="rating" style="display: inline-block;"></star-rating>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="item-image">
            <img src="https://picsum.photos/1024/480/?image=52" alt="">
          </div>
          <div class="item-info">
            <div class="info-product">
              <h6 class="title">
                <v-icon name="home"></v-icon>
                <span>Viewed 48 times ...</span>
              </h6>
              <h3>'Pinelodge' - SELF CATERING LODGE - LLANTRAISANT ...</h3>
              <p class="address">Cabin - 1BR - 1BA -Sleep 2</p>
              <p class="location">
                <v-icon name="map-pin"></v-icon>
                16.4 km to Cardiff centre</p>
              <div class="chips">
                <b-badge pill variant="light">Free Cancellation</b-badge>
              </div>
            </div>
            <div class="info-price">
              <h3>Exceptional! 5/5</h3>
              <div class="price-review">
                <p><strong>$56</strong> per night</p>
                <star-rating class="ratings" :rating="rating" style="display: inline-block;"></star-rating>
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
      text1: '',
      rating: 5,
      name: ''
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/list-view.scss';
</style>
