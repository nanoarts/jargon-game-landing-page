<template>
    <div class="containerGlobal">
<!-- COMPONENT A : header -->
        <header>
            <div class="linkPlateform">           
                    <div><h3>See all upcoming training at Hackages.io plateform</h3></div>
                    <div><a class="waves-effect waves-light btn" href="http://www.hackages.io">Hackages.io</a></div>
            </div>
          
                <nav >
                        <div>
                            <img src="../assets/img/logo_40px.png" alt="logo Tech jargon game">
                        </div>
                        <div>
                            <ul>
                                <li><a class="waves-effect waves-teal btn-flat" href="#whatIsJargon">The game</a></li>
                                <li><a class="waves-effect waves-teal btn-flat" href="#keepMe">Try it</a></li>
                                <li><a class="waves-effect waves-teal btn-flat" href="">About</a></li>
                                <li><a class="waves-effect waves-teal btn-flat" href="">Session</a></li>
                                <li><a class="waves-effect waves-teal btn-flat" href="">Board Game</a></li>
                            </ul>
                        </div>
                </nav>
            
        </header>

<!-- COMPONENT B : whatIsJargon -->
        <section id="whatIsJargon" class="whatIsJargon" >
              
                    <h1>TECH JARGON GAMES</h1>              
                    <h3  >Do you often get lost in technological jargon? You speak the same language as your colleague, but still you don’t understand each other?</h3>
                <div class="horizontal_flex">
                    <a class="btn-large waves-effect" href="#">Let's try</a>
                    <a class="btn-large waves-effect" href="#">Learn More</a>
                </div>

            <div class="mascot">
                <img src="../assets/img/mascot_320px.png" alt="Mascot Super Squirrel"> 
            </div>
        </section>
<!-- COMPONENT C : keep me up to date -->
        <section id="keepMe" class="keepMe">
                <div class="text">
                    <h3>Keep me up to date!<br>
                        Notify me when trainings and more are announced.</h3>
                </div>
                    <form action="" method="post">
                        <label for="email">email
                            <input type="email" name="email" id="email" placeholder="Email Address">
                        </label>
                          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>
                    </form>
        </section>
<!-- COMPONENT D : whyJoin -->
    <section class="whyJoin">
        <div class="title">
            <h2>Why Joining a Tech Jargon Game ?</h2>
        </div>
        <div class="listIcon">
            <ul>
                <li>
                    <img src="../assets/img/increase.png" alt="">
                    <p>Increase
                        <br> Understand Terms</p>
                </li>
                <li>
                    <img src="../assets/img/increase.png" alt="">
                    
                    <p>Connections
                        <br> between technologies</p>
                </li>
                <li>
                    <img src="../assets/img/increase.png" alt="">
                    
                    <p>Better
                        <br> Communication</p>
                </li>
                <li>
                    <img src="../assets/img/increase.png" alt="">
                    
                    <p>Expert
                        <br> mentors</p>
                </li>
                <li>
                    <img src="../assets/img/increase.png" alt="">
                   
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

    <section class="tryIt">

        <div class="modalTrue"></div>
        <div class="modalFalse"></div>

        <div class="TryTitle">
            <h2>Try it!</h2>
        </div>
        <div class="containerCategory">
            <div class="Category1">
                <h3>{category.name[0]}</h3>
                <div class="InputCart"></div>
                <div class="InputCart"></div>
                <div class="InputCart"></div>
            </div>
            <div class="Category2">
                <h3>{category.name[1]}</h3>
                <div class="InputCart"></div>
                <div class="InputCart"></div>
                <div class="InputCart"></div>
            </div>
        </div>
        <div class="ListCart">
            <div class="cart1"></div>
            <div class="cart2"></div>
            <div class="cart3"></div>
            <div class="cart4"></div>
            <div class="cart5"></div>
            <div class="cart6"></div>
        </div>
    </section>
    <section class="whatSayAbout">
        <div class="Title">
            <h2>What people say about Tech Jargon Game</h2>
        </div>
        <div class="Quotes secondaryQuote">
            <img src="" alt="">
            <h4>Name and surname</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus velit sed modi! Ex praesentium laboriosam
                earum quas a eum sapiente fuga quidem repudiandae explicabo? Ducimus accusantium a animi esse.</p>
        </div>
        <div class="Quotes principalQuote">
            <img src="" alt="">
            <h4>Name and surname</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus velit sed modi! Ex praesentium laboriosam
                earum quas a eum sapiente fuga quidem repudiandae explicabo? Ducimus accusantium a animi esse.</p>
        </div>
        <div class="Quotes secondaryQuote">
            <img src="" alt="">
            <h4>Name and surname</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus velit sed modi! Ex praesentium laboriosam
                earum quas a eum sapiente fuga quidem repudiandae explicabo? Ducimus accusantium a animi esse.</p>
        </div>
    </section>

    <section class="joinTraining">
        <div class="FiltreByCountry"></div>
        <div class="containerNextSession">
            <div class="ListFiltered">
                <iframe src="hackages.io" frameborder="0"></iframe>
            </div>
            <div class="privateSession">
                <p>OR</p>
                <p>Get a customised Tech Jargon Game session at your company</p>
                <a href="">Contact</a>
            </div>
        </div>
    </section>

    <section class="boardingGame">
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

    <footer class="footer">
        <div>

            <ul>
                <li>contact Us</li>
                <li>
                    <a href="tel:00324887903417">+32 488 79 03 417</a>
                </li>
                <li>
                    <a href="mailto:info@hackages.io">info@hackages.io</a>
                </li>
                <li>
                    <address>
                        Visit us at:
                        <br> Av. Louise 54
                        <br> 1050 Brussels
                        <br> Belgium
                    </address>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Follow Us</li>
                <li>
                    <a href="">Hackages.io</a>
                </li>
                <li>
                    <a href="">Facebook</a>
                </li>
                <li>
                    <a href="">Twitter</a>
                </li>
                <li>
                    <a href="">LinkedIn</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Instagram</a>
                </li>


            </ul>
        </div>
        <div>
            <ul>
                <li>Information</li>
                <li>Tech Jargon Game
                    <br> is a product from
                    <br> hackages.io</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Subscribe to Newsr via Email</li>
                <li>
                    <form action="" method="post">
                        <input type="email" name="" id="" placeholder="Email Address">
                        <button type="submit">Subscribe</button>
                    </form>
                </li>

            </ul>
        </div>
        <div>
            <p>© 2018 Hackages. All rights reserved</p>
            <p>We’re proud to be part of the EU Digital Skills Coalition, with as a goal to boost digital skills in the EU +
                EU digital skills badge (visual)</p>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
