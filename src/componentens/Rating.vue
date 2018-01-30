<template>
  <div class="rating">
    <ul class="list">
      <li v-for="(star,index) in maxStars" :key='index' :class="{ 'active': star <= stars }" @click="rate(star)" class="star">
        <icon scale="2" :name="star <= stars ? 'star' : 'star-o'"/>
      </li>
       <span style='line-height: 35px;display:line-block;vertical-align: top' v-if="hasCounter">{{ msg }}</span>
    </ul>
   
  </div>
</template>

<script>
  import 'vue-awesome/icons/star'
  import 'vue-awesome/icons/star-o'

  import Icon from 'vue-awesome/components/Icon'

  export default {
    components: { Icon },
    props: {
      grade: {
        type: Number,
        required: true
      },
      maxStars: {
        type: Number,
        default: 5
      },
      hasCounter: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        stars: this.grade,
        msgs:['非常差','差','一般','好','非常好'],
        msg:''
      }
    },
    mounted () {
      this.msg=this.msgs[this.stars-1]
    },
    methods: {
      rate(star) {
        if (
          typeof star === 'number' &&
          star <= this.maxStars &&
          star >= 0
        )
          this.stars = this.stars === star ? star - 1 : star
          this.msg=this.msgs[this.stars-1]
      }
    }
  }
</script>

<style scoped lang="scss">
  $active-color: #f3d23e;

  .rating {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 25px;
    color: #a7a8a8;
  }
  .list {
    margin: 0 0 5px 0;
    height: 30px;
    padding: 0;
    list-style-type: none;
    &:hover {
      .star {
        color: $active-color;
      }
    }
  }
  .star {
    display: inline-block;
    cursor: pointer;
    &:hover {
      &~.star {
        &:not(.active) {
          color: inherit;
        }
      }
    }
  }
  .active {
    color: $active-color;
  }
</style>
