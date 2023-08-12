<script setup lang="ts">
useHead({
  title: "Acho Arnold - Half Programmer, Half Philosopher",
  meta: [
    {
      name: "description",
      content:
        "I'm a Software Engineer at Microsoft and I love writing clean code to solve interesting problems using Typescript, Go, and C#",
    },
    {
      name: "twitter:title",
      content: "Acho Arnold - Half Programmer, Half Philosopher",
    },
    {
      name: "twitter:image",
      content: "https://acho.arnold.cm/peep-bg-none.png",
    },
    {
      name: "twitter:card",
      content:
        "I'm a Software Engineer at Microsoft and I love writing clean code to solve interesting problems using Typescript, Go, and C#",
    },
  ],
});
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="h-100 d-flex" :fluid="true">
        <v-row align="center" justify="center">
          <v-card theme="dark" class="text-center px-8">
            <v-avatar
              style="width: 125px"
              color="#000000"
              class="ma-3"
              size="125"
            >
              <v-img src="/peep-bg-none.png"></v-img>
            </v-avatar>
            <v-card-title class="text-h5 text-center">
              Acho Arnold
            </v-card-title>

            <v-card-subtitle class="text-subtitle-1">
              Welcome to my personal website.
              <br />
              Don't be a stranger
            </v-card-subtitle>

            <v-card-actions class="text-center justify-center">
              <v-btn
                color="#0077B5"
                href="https://www.linkedin.com/in/achoarnold"
                variant="text"
                icon="mdi-linkedin"
              ></v-btn>
              <v-btn
                color="#000000"
                href="https://github.com/AchoArnold"
                variant="text"
                icon="mdi-github"
              ></v-btn>
              <v-btn
                color="#1DA1F2"
                href="https://twitter.com/acho_arnold"
                variant="text"
                icon="mdi-twitter"
              ></v-btn>
              <v-btn
                color="#df297b"
                href="https://www.instagram.com/acho_arnold"
                variant="text"
                icon="mdi-instagram"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
