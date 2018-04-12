<template>
  <div class="containerGlobal">
    <div class="top">
      <a class="js-scrollTo" href="#header">
        <i class="material-icons">arrow_upward</i>
      </a>
    </div>
    <!-- COMPONENT A : header -->
    <header id="header">
      <div class="linkPlateform">
        <div>
          <h3>See all upcoming training at Hackages.io plateform</h3>
        </div>
        <div>
          <a class="waves-effect btn" href="http://www.hackages.io">Hackages.io</a>
        </div>
      </div>

      <nav>
        <div>
          <img src="../assets/img/logo_40px.png" alt="logo Tech jargon game">
        </div>
        <div>
          <ul>
            <li>
              <a class="waves-effect waves-light btn-flat js-scrollTo" href="#keepMe">The game</a>
            </li>
            <li>
              <a class="waves-effect waves-light btn-flat js-scrollTo" href="#tryIt">Try it</a>
            </li>
            <li>
              <a class="waves-effect waves-light btn-flat js-scrollTo" href="#whatSayAbout">About</a>
            </li>
            <li>
              <a class="waves-effect waves-light btn-flat js-scrollTo" href="#joinTraining">Session</a>
            </li>
            <li>
              <a class="waves-effect waves-light btn-flat js-scrollTo" href="#boardingGame">Board Game</a>
            </li>
          </ul>
        </div>
      </nav>

    </header>

    <!-- COMPONENT B : whatIsJargon -->
    <section id="whatIsJargon" class="whatIsJargon">

      <h1>TECH JARGON GAMES</h1>
      <h3>Do you often get lost in technological jargon? You speak the same language as your colleague, but still you don’t understand
        each other?</h3>
      <div class="horizontal_flex">
        <a class="btn-large pulse" href="#tryIt">Let's try</a>
        <a class="btn-large waves-effect" href="#">Learn More</a>
      </div>

      <div class="mascot">

        <a class=" tooltipped" data-position="bottom" data-tooltip="I am Super Squirrel !">
          <img src="../assets/img/mascot_320px.png" alt="Mascot Super Squirrel">
        </a>
      </div>
    </section>
    <!-- COMPONENT C : keep me up to date -->
    <section id="keepMe" class="keepMe">
      <div class="text">
        <h3>Keep me up to date!
          <br> Notify me when trainings and more are announced.</h3>
      </div>
      <form action="" method="post">
        <input type="email" name="email" id="email" placeholder="Email Address">
        <button class="btn waves-effect waves-light" type="submit" name="action">SEND </button>
      </form>
    </section>
    <!-- COMPONENT D : whyJoin -->
    <section id="whyJoin" class="whyJoin">
      <div class="title">
        <h2>Why Joining a Tech Jargon Game ?</h2>
        <div class="bar">
          <div class="rounded"></div>
        </div>
      </div>
      <div class="listIcon">
        <ul>
          <li>
            <img src="../assets/img/increase.png" alt="">
            <p>Increase
              <br> Understand Terms</p>
          </li>
          <li>
            <img src="../assets/img/connection.png" alt="">

            <p>Connections
              <br> between technologies</p>
          </li>
          <li>
            <img src="../assets/img/better.png" alt="">

            <p>Better
              <br> Communication</p>
          </li>
          <li>
            <img src="../assets/img/expert.png" alt="">

            <p>Expert
              <br> mentors</p>
          </li>
          <li>
            <img src="../assets/img/interactive.png" alt="">

            <p>Interactive
              <br> workshop</p>
          </li>
        </ul>
      </div>

      <div class="Mascot">
        <img src="../assets/img/mascot_320px.png" alt="Mascot Super Squirrel">
      </div>
    </section>

    <!-- COMPONENT tryIt-->

    <section id="tryIt" class="tryIt">

      <div class="modalTrue"></div>
      <div class="modalFalse"></div>

      <div class="tryTitle">
        <h2>Try it!</h2>
      </div>

      <div class="category1">
        <h3>{category.name[0]}</h3>
        <div class="InputCart"></div>
        <div class="InputCart"></div>
        <div class="InputCart"></div>
      </div>
      <div class="category2">
        <h3>{category.name[1]}</h3>
        <div class="InputCart"></div>
        <div class="InputCart"></div>
        <div class="InputCart"></div>
      </div>

      <div class="listCart">
        <div class="cart cart_a">1</div>
        <div class="cart cart_b">2</div>
        <div class="cart cart_c">3</div>
        <div class="cart cart_d">4</div>
        <div class="cart cart_e">5</div>
        <div class="cart cart_f">6</div>
      </div>
    </section>

    <!-- COMPONENT whatSayAbout-->


    <section id="whatSayAbout" class="whatSayAbout">
      <div class="title">
        <h2>What people say about Tech Jargon Game</h2>
        <div class="bar">
          <div class="rounded"></div>
        </div>
      </div>
      <div class="cartList valign-wrapper">
        <div class="card-panel">
            <span class="vuePerson"><img src="../assets/img/profil.jpg" alt=""></span>
            <span><h3>Name Surname</h3></span>
          <span class="white-text">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
            markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
        <div class="card-panel centerselected">
            <span class="vuePerson"><img src="../assets/img/profil.jpg" alt=""></span>
            <span><h3>Name Surname</h3></span>
          <span class="white-text">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
            markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>

        <div class="card-panel">
            <span class="vuePerson"><img src="../assets/img/profil.jpg" alt=""></span>
            <span><h3>Name Surname</h3></span>
          <span class="white-text">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little
            markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>
    </section>


    <!-- COMPONENT joinTraining-->

    <section id="joinTraining" class="joinTraining">
      <div class="FiltreByCountry"></div>
      <div class="containerNextSession">
        <div class="ListFiltered">
          <iframe src="http://www.hackages.io" frameborder="0"></iframe>
        </div>
        <div class="privateSession">
          <p>OR</p>
          <p>Get a customised Tech Jargon Game session at your company</p>
          <a href="">Contact</a>
        </div>
      </div>
    </section>


    <!-- COMPONENT boardingGame-->

    <section id="boardingGame" class="boardingGame">
      <div class="Mascot">
        <img src="" alt="">Mascot </div>
      <div class="containerCenter">
        <h3>Boarding game</h3>
        <img src="" alt="fondamental">
        <h4>Pre released</h4>
        <button>Keep me up to date</button>
      </div>

      <div class="Modal"> Simple Form with email</div>
    </section>



    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Link 1</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Link 2</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Link 3</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: "landingpage",

    data() {
      return {
        msg: "Welcome"
      };
    }
  };

  $(document).ready(function () {
    $(".tooltipped").tooltip();
  });

  $(document).ready(function () {
    $(".js-scrollTo").on("click", function () {
      // Au clic sur un élément

      var page = $(this).attr("href"); // Page cible
      var speed = 1500; // Durée de l'animation (en ms) 'slow'
      $("html, body").animate({
        scrollTop: $(page).offset().top
      }, speed); // Go
      return false;
    });
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
