<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            De Vinci Innovation Center (ESILV)
          </h4>

          <span>2022 — 2024</span>

          <p class="timeline-text">
            Master Creative Technology -  Teachings: Deep Learning (Pytorch), Electronics, Modeling, Research methods 
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            ESILV - Paris France
          </h4>

          <span>2019 — 2024</span>

          <p class="timeline-text">
            5th year of engineering school (Bac+5) - Teachings: Mathematics, Physics, Computer Science, Electronics
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Sungkyunkwan University - South Korea
          </h4>

          <span>2021</span>

          <p class="timeline-text">
            Semester of study - Computer Science
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            MPSI Descartes Highschool - Tours France
          </h4>

          <span>2018 - 2019</span>

          <p class="timeline-text">
            Preparatory class MPSI
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Emobot (5 months internship)
          </h4>

          <span>2023</span>

          <p class="timeline-text">
            Deploying a transformer based model to improve the quality of the visual emotion predictions using the speech
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Deep Learning Project - Vocal Commands
          </h4>

          <span>2022 - 2023</span>

          <p class="timeline-text">
            Project allowing the activation of features by voice on augmented reality platforms
          </p>
        </li>


        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Treasurer of a ski association
          </h4>

          <span>2022 - 2023</span>

          <p class="timeline-text">
            Skills developed: sponsor approach, budget management, event organization
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            APVL ingénierie (3 months internship)
          </h4>

          <span>2021</span>

          <p class="timeline-text">
            Research department : Solidworks modeling 
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Imagination and exploration projects (PIX)
          </h4>

          <span>2019 — 2022</span>

          <p class="timeline-text">
            Skills developed: drawing up specifications, planning and budget. 
          </p>
        </li>
      </ol>
    </section>
<!-- 
    <section class="skill">
      <h3 class="h3 skills-title">
        My skills
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Web design
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Graphic design
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Branding
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              WordPress
            </h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%;" />
          </div>
        </li>
      </ul>
    </section> -->
  </article>
</template>
