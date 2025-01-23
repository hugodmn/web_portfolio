<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/17.jpg" alt="Hugo Daumain" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Hugo Daumain">
          Hugo Daumain
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Creative Technology Student</span>
          <span>Deep Learning Student</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:daumainhugo@gmail.com" class="contact-link">daumainhugo@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/hugodmn" class="contact-link" target="_blank">hugodmn</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://tr.linkedin.com/in/hugo-daumain" class="contact-link" target="_blank">Hugo Daumain</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Paris, France</address>
          </div>
        </li>
      </ul>

      <div class="separator" />
<!-- 
      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://www.twitter.com/afsakar" class="social-link" target="_blank">
            <ion-icon name="logo-twitter" />
          </NuxtLink>
        </li>

        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/afsakar" class="social-link" target="_blank">
            <ion-icon name="logo-instagram" />
          </NuxtLink>
        </li> -->
        <!-- <LangSwitcher2 />
      </ul> -->
    </div>
  </aside>
</template>

<style>
figure.avatar-box {
  border: .2rem solid #fff;
  border-radius: .8rem;
}

img {
  border-radius: .5rem;
}
</style>
