<script setup lang="ts">
import {mdiTwitter, mdiGithub, mdiInstagram, mdiLinkedin} from "@mdi/js";
import BlueskyIcon from "~/components/bluesky-icon.vue";

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
                :icon="mdiLinkedin"
              />
              <v-btn
                color="#000000"
                href="https://github.com/AchoArnold"
                variant="text"
                :icon="mdiGithub"
              />
              <v-btn
                color="#1DA1F2"
                href="https://twitter.com/acho_arnold"
                variant="text"
                :icon="mdiTwitter"
              />
              <v-btn
                color="#df297b"
                href="https://www.instagram.com/acho_arnold"
                variant="text"
                :icon="mdiInstagram"
              ></v-btn>
              <v-btn
                  color="#4f9bd9"
                  href="https://bsky.app/profile/arnold.cm"
                  variant="text"
                  :icon="true"
              >
                <v-icon size="small" color="#4f9bd9">
                  <svg fill="#4f9bd9" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
                  </svg>
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
