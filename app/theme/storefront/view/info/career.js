//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Career extends MarketplaceLayout {
  

   *head() {
      // return html`
      //     <title>Paykhom Mondi</title
      //     <meta name="title" content="Paykhom Mondi" />

      //     <meta name="description" content="Paykhom Mondi" />

      //     <meta name="keywords" content="Paykhom Mondi" />


         
      //     `;
   }

   *style() {
yield html`
      <style>
      </style>

`;
   }

   



   
    
  *content() {
    //dd(session('order'));
yield html`

<main>
      
      <section class="bg-light py-5">
          <div class="container-fluid">
              <div class="row align-items-center">
                  <div class="col-md-6">
                       <h1>Join Our Growing Team</h1>
                       <p class="lead">At Paykhom, we're building the future of e-commerce in Bangladesh. Be part of a team that values innovation, collaboration, and customer satisfaction.</p>
                       <p>
                         We welcome all applicants who wants to be a part of our journey in revolutionizing the e-commerce sector in Bangladesh.
                      </p>
                       
                       
                       <a href="#openings" class="btn btn-primary">See Openings</a>
                  </div>
                  <div class="col-md-6">
                      <img  loading="lazy" data-src="/_assets/images/info/career.png" width="100%"  alt="Careers Image" class="img-fluid rounded">
                   </div>
              </div>
          </div>
      </section>
      
      <section class="py-5">
           <div class="container-fluid">
                <h2 class="text-center mb-4">Why Work With Us?</h2>
                <div class="row">
                    <div class="col-md-4 mb-4">
                          <div class="card h-100">
                              <div class="card-body">
                                    <h5 class="card-title"><i class="fas fa-lightbulb text-primary me-2"></i>Innovation-Driven</h5>
                                     <p class="card-text">Be part of a team that's committed to pushing the boundaries of e-commerce.</p>
                              </div>
                         </div>
                    </div>
                    <div class="col-md-4 mb-4">
                         <div class="card h-100">
                             <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-users text-primary me-2"></i>Collaborative Environment</h5>
                                    <p class="card-text">Join a culture of teamwork where your contributions are valued and help shape Paykhom.</p>
                              </div>
                       </div>
                    </div>
                    <div class="col-md-4 mb-4">
                       <div class="card h-100">
                           <div class="card-body">
                                 <h5 class="card-title"><i class="fas fa-handshake text-primary me-2"></i>Impactful Work</h5>
                                  <p class="card-text">Work on projects that directly impact our users and help grow the local economy.</p>
                           </div>
                        </div>
                    </div>
                 <div class="col-md-4 mb-4">
                      <div class="card h-100">
                          <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-rocket text-primary me-2"></i>Growth Opportunities</h5>
                                  <p class="card-text">Paykhom believes in the growth of its employees and provides training to help you improve your skills and career progression. </p>
                            </div>
                       </div>
                 </div>
                  <div class="col-md-4 mb-4">
                        <div class="card h-100">
                          <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-briefcase text-primary me-2"></i>Meaningful Career</h5>
                                   <p class="card-text">Work on a product that is helping shape the future of e-commerce in Bangladesh.</p>
                          </div>
                       </div>
                   </div>
                   <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-heart text-primary me-2"></i>Teamwork</h5>
                                  <p class="card-text">Be a part of team that works together in order to achieve a common objective.</p>
                             </div>
                        </div>
                   </div>
                </div>
            </div>
      </section>

      <section class="bg-light py-5" id="openings">
           <div class="container-fluid">
                 <h2 class="text-center mb-4">Current Openings</h2>
                  <div class="row">
                      <div class="col-md-6 mb-4">
                         <div class="card">
                              <div class="card-body">
                                   <h5 class="card-title">Software Engineer</h5>
                                    <p class="card-text">Help build Paykhom's core software, and shape the future of our technical endeavors.</p>
                                   <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Apply Now</a> -->
                               </div>
                          </div>
                     </div>
                   <div class="col-md-6 mb-4">
                          <div class="card">
                              <div class="card-body">
                                    <h5 class="card-title">Marketing Specialist</h5>
                                     <p class="card-text">Craft engaging marketing campaigns and help us acquire customers and grow our brand.</p>
                                     <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Apply Now</a> -->
                              </div>
                          </div>
                      </div>
                  <div class="col-md-6 mb-4">
                         <div class="card">
                             <div class="card-body">
                                 <h5 class="card-title">Customer Support Agent</h5>
                                 <p class="card-text">Be the voice of Paykhom and ensure that our customer and business clients are happy and have access to help when needed.</p>
                                 <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Apply Now</a> -->
                             </div>
                         </div>
                   </div>
                  <div class="col-md-6 mb-4">
                         <div class="card">
                              <div class="card-body">
                                 <h5 class="card-title">Sales Associate</h5>
                                    <p class="card-text">Drive our business forward by helping us connect with local businesses and vendors.</p>
                                   <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Apply Now</a> -->
                                </div>
                         </div>
                      </div>
                   <div class="col-md-6 mb-4">
                        <div class="card">
                           <div class="card-body">
                             <h5 class="card-title">Operations Manager</h5>
                             <p class="card-text">Ensure that the day-to-day operations of Paykhom run smoothly and efficiently for our clients.</p>
                               <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Apply Now</a> -->
                           </div>
                         </div>
                   </div>
                   <div class="col-md-6 mb-4">
                         <div class="card">
                             <div class="card-body">
                                <h5 class="card-title">Product Manager</h5>
                                <p class="card-text">Help craft our vision, roadmaps, and product strategy, and shape the next generation of Paykhom offerings.</p>
                                   <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Apply Now</a> -->
                               </div>
                         </div>
                  </div>
                </div>
              </div>
      </section>


      <section class="py-5">
        <div class="container text-center">
              <h2>Don't see an opening?</h2>
               <p class="lead">We're always on the lookout for talented individuals. Send us your resume and let us know what you're passionate about.</p>
              <a href="/info/contact" class="btn btn-outline-secondary">Contact Us</a>
        </div>
      </section>

  </main>

`;        
   }
   *script() {
yield html`

<script>

class Page extends MarketplaceLayout {

    constructor(params) {
        super(params);
    }



    async uponReady() {
        await super.uponReady();
    }


}

page = new Page();

</script>
`;
   }
}