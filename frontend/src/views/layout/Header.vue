<template>
  
    <v-parallax dark src="img/parallax.jpg" height="300" >
      <v-toolbar v-scroll="onScroll" :color="isTransparent ? 'transparent' : '#00008B'" app flat>
        <v-toolbar-title class="mx-3 mr-5">
            <a href="/">
              <span><v-img src="img/brand/partdblogo.png" width="50" height="auto"></v-img></span>
            </a>
        </v-toolbar-title>
        <v-toolbar-items>
          <v-btn color="white" href="/about"  depressed flat>Company</v-btn>
          <v-btn color="white" href="/about" flat>Service</v-btn>
          <v-btn color="white" href="/about" flat>Products</v-btn>
          <v-btn color="white" href="/dealership" flat>Dealership</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn color="white" icon flat>
            <v-icon>event_note</v-icon>
          </v-btn>
          <v-btn color="white" icon flat>
            <v-icon>contacts</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3"> 
          <img src="img/brand/logo.png"/>
        </h1>
        
        <h4 class="subheading text-xs-center">
          (주)부품디비는 모든 제조업분야에 적용 가능한 
          국제표준기반 엔지니어링 IT 및 VR 솔루션을 제공하는 기업입니다. <br>
          보다 우수한 품질, 높은 신뢰성, 유연성, 특정 기술로부터의 독립성을 확보해 드리기 위해 
          최선을 다하겠습니다.
        </h4>
      </v-layout>
    </v-parallax> 
  
</template>

<script>
export default {
  
  data: () => ({
    isTransparent: true
  }),

  methods: {
    onScroll() {
      this.isTransparent = window.pageYOffset < 200;
    }
  }

}
</script>

<style>

</style>
