<script setup>


useHead({
})

onMounted(() => {
  useLocaleStore()
})



/* Testimonials */
// const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */

</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        I am an undergraduate student in Creative Technology studying Human-Computer Interactions. As part of the Artificial Lives group, I am interested in computer science, deep learning and electronics. I'm working on projects aiming at making human-computer interfaces seameless, smooth and intuitive.
      </p>

      <p>
        Over the last few years, I've developed a deep interest in the field of Deep Learning and the versatility of its applications, particularly in the world of audio. 
      </p>
    </section>

    <!-- service -->

    <!-- <section class="service">
      <h3 class="h3 service-title">
        What i'm using?
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section> -->

    <!-- testimonials -->

    <!-- <section class="testimonials">
      <h3 class="h3 testimonials-title">
        Testimonials
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials-item" @click="showTestimonial(testimonial.id)">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="testimonial.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ testimonial.title }}
            </h4>

            <div class="testimonials-text">
              <p>{{ locale === 'en' ? testimonial.content?.en : testimonial.content?.tr }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section> -->

    <!-- testimonials modal -->
<!-- 
    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.tr" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div> -->

    <!-- clients -->

    <section class="clients">
      <h3 class="h3 clients-title">
        Programming Skills
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="/images/python.png" alt="client logo" style="width: 150px; height: auto">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/pytorch2.png" alt="client logo" style="width: auto; height: auto">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/pandas.png" alt="client logo" style="width: auto; height: auto">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/c++2.png" alt="client logo" style="width: 150px; height: auto">
           <!-- Make this image fixed size -->

          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/docker.png" alt="client logo" style="width: auto; height: auto">
           <!-- Make this image fixed size -->

          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/github.png" alt="client logo" style="width: auto; height: auto">
           <!-- Make this image fixed size -->

          </a>
        </li>
        <li class="clients-item">
          <a href="#">
            <img src="/images/linux.png" alt="client logo" style="width: auto; height: auto">
           <!-- Make this image fixed size -->

          </a>
        </li>
      </ul>
    </section>


    <section class="clients">
      <h3 class="h3 clients-title">
        Other Skills
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="/images/kicad.png" alt="client logo" style="width: auto ; height: auto">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/solidworks.png" alt="client logo" style="width: auto; height: auto">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="/images/fusion360.png" alt="client logo" style="width: auto; height: auto">
          </a>
        </li>

      </ul>
    </section>


  </article>
</template>

<!-- 

<style>
  .clients-item img {
    width: 150px; /* Set the width to your desired size */
     /* Automatically adjust the height to maintain the aspect ratio */
  }
</style> -->