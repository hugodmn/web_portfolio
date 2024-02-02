<script setup>
useHead({
  title: 'Projects',
})
</script>

<template>
  <article class="projects active" data-page="projects">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.projects') }}
      </h2>
    </header>

    <section class="projects-posts">
      <ul class="projects-posts-list">
        <!-- <li class="projects-post-item">
          <a href="#">

            <figure class="projects-banner-box">
              <img src="/images/project_voicecommands.png" alt="Design conferences in 2022" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Design</p>

                <span class="dot" />

                <time datetime="2022-02-23">Fab 23, 2022</time>
              </div>

              <h3 class="h3 blog-item-title">Design conferences in 2022</h3>

              <p class="blog-text">
                Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
              </p>

            </div>

          </a>
        </li> -->
        <li class="blog-post-item">
          <a href="https://github.com/hugodmn/ThreeJsProject?tab=readme-ov-file">

            <figure class="blog-banner-box">
              <img src="/images/threejs.png" alt="3D Speech-Driven Animation Web App" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Deep Learning</p>

                <span class="dot" />

                <time datetime="2022-02-23">2024</time>
              </div>

              <h3 class="h3 blog-item-title">3D Speech-Driven Animation Web App</h3>

              <p class="blog-text">
                3D animations driven by real-time speech synthesis, using a custom transformer model for text generation
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://hugodmn.github.io/shakespeare_generation.github.io/">

            <figure class="blog-banner-box">
              <img src="/images/shakespeare.png" alt="Training transformer on text generation" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Deep Learning</p>

                <span class="dot" />

                <time datetime="2022-02-23">2023</time>
              </div>

              <h3 class="h3 blog-item-title">Training transformer on text generation</h3>

              <p class="blog-text">
                Training a transformer on Shakespeare corpus with 3 different tokenizers, displaying the losses and generated text each 200 steps
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://hugodmn.github.io/keyboard_trackpad.github.io/">

            <figure class="blog-banner-box">
              <img src="/images/emnist.png" alt="Handwritten letter learning" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Deep Learning</p>

                <span class="dot" />

                <time datetime="2022-02-23">2023</time>
              </div>

              <h3 class="h3 blog-item-title">Handwritten letter learning</h3>

              <p class="blog-text">
                Training Resnet-18 on EMNIST for handwritten letter recognition
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://github.com/electron260/Flash_GPT">

            <figure class="blog-banner-box">
              <img src="/images/flashgpt.png" alt="Hey FlashMate !" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Deep Learning</p>

                <span class="dot" />

                <time datetime="2022-02-23">work in progress...</time>
              </div>

              <h3 class="h3 blog-item-title">Hey FlashMate !</h3>

              <p class="blog-text">
                Home Assistant using the ChatGPT API 
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://github.com/electron260/inference_whisper_benchmark">

            <figure class="blog-banner-box">
              <img src="/images/whisper.jpeg" alt="How to make a multitouch surface ?" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Deep Learning</p>

                <span class="dot" />

                <time datetime="2022-02-23">2023</time>
              </div>

              <h3 class="h3 blog-item-title">Benchmark of whisper implementations</h3>

              <p class="blog-text">
                Comparaison of the inference speed of different whisper implementations (on GPU)
              </p>

            </div>

          </a>
        </li>


        <li class="blog-post-item">
          <a href="https://dvic.devinci.fr/projects/GOSAI-vocal-commands">

            <figure class="blog-banner-box">
              <img src="/images/project_voicecommands.png" alt="Implementation of voice commands for augmented reality applications" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Deep Learning</p>

                <span class="dot" />

                <time datetime="2022-02-23">2022 - 2023</time>
              </div>

              <h3 class="h3 blog-item-title">Voice Commands for GOSAI</h3>

              <p class="blog-text">
                Implementation of voice commands in GOSAI OS system for augmented reality applications
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://dvic.devinci.fr/tutorial/gesture-recognition-embedded">

            <figure class="blog-banner-box">
              <img src="/images/project_movementsurfaces.png" alt="Exploring Gesture Recognition on Embedded Hardware" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Design</p>

                <span class="dot" />

                <time datetime="2022-02-23">2023</time>
              </div>

              <h3 class="h3 blog-item-title">Exploring Gesture Recognition on Embedded Hardware</h3>
       
              <p class="blog-text">
                Predicting multiple fingers gesture or hand gestures on multi-touch systems
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://dvic.devinci.fr/tutorial/how-to-make-a-multitouch-surface">

            <figure class="blog-banner-box">
              <img src="/images/project_multitouchsurfaces.png" alt="How to make a multitouch surface ?" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Deep Learning & Electronics</p>

                <span class="dot" />

                <time datetime="2022-02-23">2022 - 2023</time>
              </div>

              <h3 class="h3 blog-item-title">How to make a multitouch surface ?</h3>

              <p class="blog-text">
                Tutorial providing step-by-step instructions for creating a multi-touch surface capable of recognizing simple movements
              </p>

            </div>

          </a>
        </li>

      </ul>
    </section>
  </article>
</template>
