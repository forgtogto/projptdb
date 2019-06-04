<template>
 
  <div>
    <!-- 상단 타이틀  -->
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Dealership</h3>
              <span class="subheading">We are heading for a better place.</span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">We are heading for a better place.</div> 
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron> 
  <!-- 제품 나열 -->
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-1">Dealership 제품</h3>
          <br>
            <div class="d-flex justify-between align-center mb-3 ">
              <v-btn @click="all">all</v-btn>
              <v-btn @click="none">none</v-btn>
            </div>
            <v-expansion-panel v-model="panel" expand >
              <!-- SAS -->
              <v-expansion-panel-content >
                <template v-slot:header>
                  <div  class="title font-weight-bold">Share-A-space</div> 
                </template>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex d-flex xs12 sm6 md4>
                        <v-card >
                          <v-card-text class="text-md-center">
                            <img src="img/dealership/shareAspace.jpg"  class="imgcenter"  > 
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12 sm6 md8>
                        <v-card color="green" dark > 
                          <v-card-text>
                            Share-A-space는 PLCS로 잘 알려진 ISO 10303-AP239 국제표준 기반의정보통합 및 웹 기반 협업지원 시스템입니다.  
                            선진국의 군, 방산업체, 자동차, 항공 등 다양한 도메인에서 정보 통합, 형상관리 시스템, 협력사 간 협업시스템을 구축하는데 활용하고 있습니다.  
                            Share-A-space는 고객사가 보유한 방대한 데이터를 통합하여 그 가치를 최대화할 수 있는최적의 솔루션을 제공합니다.
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      </v-layout>
                  </v-container>
              </v-expansion-panel-content>
              <!-- EDM -->
              <v-expansion-panel-content >
                <template v-slot:header>
                  <div  class="title font-weight-bold">EDM</div> 
                </template>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex d-flex xs12 sm6 md4>
                        <v-card >
                          <v-card-text class="text-md-center">
                            <img src="img/dealership/edm.gif"   > 
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12 sm6 md8>
                        <v-card color="purple" dark > 
                          <v-card-text>
                            EDM은 STEP/IFC 표준을 완벽하게 컴파일할 수 있는 개발 지원 도구로, 응용프로그램 개발, 시스템 통합, 데이터 모델링 등
                            모든 개발자를 지원하기 위한 EXPRESS 도구 패키지와 PLM을 위한 Model Server를 제공합니다.
                            EDM은 다양한 비즈니스 이론 및 요구사항을 실제 비즈니스 목표로 변환하는 것을도와드립니다.
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      </v-layout>
                  </v-container>
              </v-expansion-panel-content> 
              <!-- Theorem Solutions -->
              <v-expansion-panel-content >
                <template v-slot:header>
                  <div  class="title font-weight-bold">Theorem Solutions</div> 
                </template>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex d-flex xs12 sm6 md4>
                        <v-card >
                          <v-card-text class="text-md-center">
                            <img src="img/dealership/theoerm.jpg"  class="imgcenter"  > 
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12 sm6 md8>
                        <v-card color="purple" dark > 
                          <v-card-text>
                            Theorem Solutions는 다양한 환경의 CAD 도구들에 대한 사용 모델을 B-rep 기반으로번역하고 CAD모델의 품질 검사 및 오류 수정을 지원합니다. 
                            부품디비는 모든 종류의 형상 정보, 조립 구조 및 속성데이터를 전달하고 배치 모드 및형상 필터링을 지원하는 CADverter를 제공합니다.
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      </v-layout>
                  </v-container>
              </v-expansion-panel-content> 
              <!-- Trans Magic -->
              <v-expansion-panel-content >
                <template v-slot:header>
                  <div  class="title font-weight-bold">Trans Magic</div> 
                </template>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex d-flex xs12 sm6 md4>
                        <v-card >
                          <v-card-text class="text-md-center">
                            <img src="img/dealership/transmagic.png"  class="imgcenter"  > 
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12 sm6 md8>
                        <v-card color="purple" dark > 
                          <v-card-text>
                            TransMagic은 CAD 모델의 오류 검증, 수정 및 번역을 지원하는 솔루션입니다. 
                            특히, GUI를 활용하여 다양한 CAD 형식*에 대한 형상 오류 수정은 탁월한 사용자의편의성을 제공하고 이종 CAD간의 협업 기능을 지원합니다. <br>
                            * CATIA V4, CATIA V5, Unigraphics, Pro/Engineer, AutoCAD, Inventor, SolidWorks, ACIS,Parasolid, STEP, IGES, StereoLithography
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      </v-layout>
                  </v-container>
              </v-expansion-panel-content> 
              <!-- TechViz XL -->
              <v-expansion-panel-content >
                <template v-slot:header>
                  <div  class="title font-weight-bold">TechViz XL</div> 
                </template>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex d-flex xs12 sm6 md4>
                        <v-card >
                          <v-card-text class="text-md-center">
                            <img src="img/dealership/techviz.png"  class="imgcenter"  > 
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12 sm6 md8>
                        <v-card color="purple" dark > 
                          <v-card-text>
                            TechViz XL은 사용자가 어떠한 데이터의 변환 없이 해상도, 크기, 형태 또는 성능의 제한 없이
                            고객의 데스크탑 3D 어플리케이션을 직접적으로 가상의 환경으로 전환하여 실시간 가상 시제품을 제공합니다.<br>
                            *200여개의 OPEN GL CAD SW를 지원합니다.
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      </v-layout>
                  </v-container>
              </v-expansion-panel-content> 
              <!-- Tracking System -->
              <v-expansion-panel-content >
                <template v-slot:header>
                  <div  class="title font-weight-bold">Tracking System</div> 
                </template>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                      <v-flex d-flex xs12 sm6 md4>
                        <v-card >
                          <v-card-text class="text-md-center">
                            <img src="img/dealership/ART.png"  class="imgcenter"  > 
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex xs12 sm6 md8>
                        <v-card color="purple" dark > 
                          <v-card-text>
                            ART사의 트래킹 시스템은 그 용도에 따라서 다양하게 준비되어 있습니다. 
                            또한 수집된 정보를 활용할 수 있는 SDK를 통해 확장된 서비스를 제공합니다.
                          </v-card-text>
                        </v-card>
                      </v-flex>
                      </v-layout>
                  </v-container>
              </v-expansion-panel-content> 
            </v-expansion-panel>
         </v-flex>
      </v-layout>
    </v-container>

    <!-- 딜러쉽 교육 -->
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-1">Dealership 교육</h3>    


          
         </v-flex>
      </v-layout>
    </v-container>

    
    <section class="section bg-secondary">
      <div class="container" id="dealershipTraining">
        <h3 class="h4 text-success font-weight-bold mb-4">Dealership 교육</h3>
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-success shadow border-0">
              <img v-lazy="'img/dealership/test.jpg'" class="card-img-top">
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon points="0,52 583,95 0,95" class="fill-success"></polygon>
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-success"></polygon>
                </svg>
                <h4
                  class="display-3 font-weight-bold text-white"
                >ACIS / InterOp / HOOPS Basic Training Course Agenda</h4>
                <p class="lead text-italic text-white"></p>
                <card shadow class="shadow-lg--hover mt-5">
                  <div class="d-flex px-3">
                    <div></div>
                    <div class="pl-4">
                      <h5 class="title text-success">내가 ACIS에 끌리는 이유?</h5>
                      <ul class="list-unstyled mt-2">
                        <li class="py-2">
                          <div class="d-flex align-items-center">
                            <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                            <h6 class="mb-0">스레드 - 안전성</h6>
                          </div>
                        </li>
                        <li class="py-2">
                          <div class="d-flex align-items-center">
                            <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                            <h6 class="mb-0">대용량 모델 지원</h6>
                          </div>
                        </li>
                        <li class="py-2">
                          <div class="d-flex align-items-center">
                            <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                            <h6 class="mb-0">빠른 개발기능</h6>
                          </div>
                        </li>
                        <li class="py-2">
                          <div class="d-flex align-items-center">
                            <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                            <h6 class="mb-0">MCAD 기능 확장성</h6>
                          </div>
                        </li>
                        <li class="py-2">
                          <div class="d-flex align-items-center">
                            <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                            <h6 class="mb-0">다양한 모델 편집 기능</h6>
                          </div>
                        </li>
                        <li class="py-2">
                          <div class="d-flex align-items-center">
                            <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                            <h6 class="mb-0">우수한 상호 운용성</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </card>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon name="ni ni-briefcase-24" class="mb-5" size="lg" type="warning" shadow rounded></icon> 
              <h3>ACIS / InterOp / HOOPS</h3>
              <p>
                3D ACIS Modeler(ACIS)는 CAD/CAM/CAE, 건설/건축, 애니메이션, 그리고 조선, 항공, 자동차 분야를 포함하여,
                전 세계적으로 수백 명의 소프트웨어개발자들이 사용하는 Spatial의 뛰어난 3D 모델링 엔진입니다.
              </p>
              <p>또한 ACIS는 소프트웨어 개발자들에게 고성능의 응용프로그램을 개발하는데필요한 기본적인 3D 모델링 기능을 제공합니다.</p>
              <p>
                ACIS는 개방적이고, 객체 지향적인 C++ 아키텍처를 통해 견고한 3D 모델링 기능을제공하고, 하이브리드 모델링 특징을
                가진 응용프로그램을 개발하는데이상적인 도구입니다. 즉, 다양체와 비 다양체 위상 구조를 가지는 와이어프레임,
                서피스 및 솔리드 모델을 통합 할 수 있고, 이와 함께 풍부한 기하 연산을 제공합니다.
              </p>
              <p>ACIS를 이용하여 견고한 3D 모델링 응용프로그램을 개발할 수 있고, 산업적인 문제를 해결 할 수 있습니다.</p>
            </div>
            <div class="pl-md-5">
              <img src="img/dealership/timetable.jpg" class="img-fluid">
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        panel: [],
        items: 6
      }
    },
    methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(this.items).keys()].map(_ => true)
      },
      // Reset the panel
      none () {
        this.panel = []
      }
    }
  }
</script>
<style>
.imgcenter {
  margin-left: auto;
  margin-right: auto;
  width:300px; 
  height:auto;

}
</style>

