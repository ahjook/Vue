<template>
   <input type="text" class="form-control" v-model ="text"/>

</template>
<style scoped></style>
<script>
  export default {
    beforeCreate(){
      console.log('before created')
    },
    created(){
      console.log('created')
    },
    beforeMount(){
      console.log('before mounted')
    },
    beforeUpdate(){
      console.log('before updated')
    },
    data() {
      return {
        text:null
      }
    }
  }
</script>