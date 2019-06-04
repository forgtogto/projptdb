<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-1">
        <strong class="headline">(주) 부품디비</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <v-card-text
          class="subheading"
        >사업자등록번호 : 314-81-28513 / TEL : 042-862-9226 / 주소 : 대전 유성구 유성대로 1476-55 KNS빌딩 별관 2층 (주)부품디비</v-card-text>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;&nbsp;{{year}} &nbsp;
        <strong>PartDB Co., Ltd. All Rights Reserved.</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["home", "web" ],
    year: new Date().getFullYear()
  })
};
</script>