let AppBar = {
    template: ` <div>
                    <v-app-bar
                        color="primary">
                        <v-avatar 
                            tile
                            size="60">
                            <v-img :src='pic' 
                                max-width="60" 
                                max-height="50"
                                id="logo"></v-img>
                        </v-avatar>
                        <v-spacer></v-spacer>  
                        <v-app-bar-nav-icon color="white" large @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    </v-app-bar>
                    <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        right
                        class="orange darken-1"
                        width="30%">
                        
                        <v-list>
                            <v-list-item-group
                                v-model="group"
                                color="white"
                                id="text_list">
                                <v-list-item v-for="title in titles" :key="title" class="text-uppercase">
                                <v-row justify="center" class="ma-5 white--text">
                                    {{title}}
                                </v-row>
                                </v-list-item>
                                
                            </v-list-item-group>
                        </v-list>
                    </v-navigation-drawer>
                </div>`,
    data() {
        return {
            titles: [
                'Inicio',
                'Quienes Somos',
                'Nuestro Equipo',
                'Nuestros Trabajos',
                'Contacto'
            ],
            pic: './imagenes/logo--white.png',
            drawer: false,
            group: null,
        }
    },
    watch: {
        group () {
          this.drawer = false
        },
      },
}

let Home = {
    template: ` <div>
                    <v-container py-10>
                        <v-row align="center" height="500px">
                            <v-col cols="12">
                                <h1><span class="title_1">
                                    FOX LAB
                                </span></h1>
                            </v-col>
                            <v-col>
                                <h2><span class="title_2">
                                    {{title_2}}
                                </span></h2>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>`,
    data() {
        return {
            title_2: 'Empecemos juntos algo completamente nuevo'
        }
    },
}

let Team = {
    template: ` <div>
                    <div class="flap team"></div>
                    <v-container fluid class="text-center">
                                <h2><span class="head">
                                    NUESTRO EQUIPO
                                </span></h2>
                                <v-sheet tile color="#D7DBDD" width="100%">
                                    <v-slide-group
                                    class="pa-4"
                                    width="100%"
                                    >
                                    <v-slide-item
                                        v-for="user in users"
                                        :key="user.full_name"
                                    >
                                        <v-card
                                        class="ma-4 d-flex align-center"
                                        min-height="350"
                                        min-width="350"
                                        color="#333333"
                                        elevation="8"
                                        >
                                            <v-row>
                                                <v-col>
                                                        <v-avatar size="100px">
                                                            <v-img :src="user.picture"></v-img>
                                                        </v-avatar>
                                                    <v-card-text>
                                                        <h3 class="white--text"><span>{{user.full_name}}</span></h3>
                                                        <h3><span class="team_card_text">{{user.position}}</span></h3> 
                                                        <v-btn fab x-large text v-for="social in user.socials" :key="social.icon" :href="social.href" target="_blanck">
                                                            <v-icon color="white" x-large>{{social.icon}}</v-icon>
                                                        </v-btn>   
                                                    </v-card-text>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-slide-item>
                                    </v-slide-group>
                                </v-sheet>
                    </v-container>
                </div>`,
    data() {
        return {
            users: [
                {
                    full_name: 'Fernando Barroso',
                    position: 'CEO',
                    picture: 'imagenes/fbarroso.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/Ferjapolis'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/ferjapolis/'
                        }
                    ]
                },
                {
                    full_name: 'Kevin Barroso',
                    position: 'Project Manager',
                    picture: 'imagenes/kbarroso.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/madara8854'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/kobouharriet/'
                        },
                        {
                            icon: 'mdi-facebook',
                            href: 'https://www.facebook.com/kbarrozo'
                        }
                    ]
                },
                {
                    full_name: 'Nicolas Ayos',
                    position: 'Developer',
                    picture: 'imagenes/nayos.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/nicolasayos'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/nicolasayos/'
                        },
                        {
                            icon: 'mdi-facebook',
                            href: 'https://www.facebook.com/nicolas.ayos'
                        }
                    ]
                },
                {
                    full_name: 'Nikolas Barroso',
                    position: 'Designer',
                    picture: 'imagenes/nbarroso.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/Fisherplay'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/nikolas.h17/'
                        }
                    ]
                },
                {
                    full_name: 'Lucas Nuñez',
                    position: 'Designer',
                    picture: 'imagenes/lnunez.jpg',
                    socials: [
                        { 
                            icon: 'mdi-github',
                            href: 'https://github.com/lucasjnunez2000'
                        },
                        {
                            icon: 'mdi-instagram',
                            href : 'https://www.instagram.com/_lucasn10/'
                        },
                        {
                            icon: 'mdi-facebook',
                            href: 'https://www.facebook.com/lucasjoel.nunez'
                        }
                    ]
                }
            ]
        }
    },
}

let OurJobs = {
    template: ` <div>
                    <div class="flap jobs"></div>
                    <v-container fluid class="text-center">
                        <h2><span class="head">
                            NUESTRO TRABAJOS
                        </span></h2>
                        <v-item-group>
                            <v-row>
                                <v-col
                                v-for="site in sites"
                                :key="site.name"
                                cols="12"
                                md="4"
                                
                                >
                                <v-item v-slot="{ active, toggle }">
                                    <v-card
                                    height="250"
                                    class="ma-4"
                                    @click="toggle"
                                    >
                                        <v-img height="250" :src="site.pic">
                                            <v-scroll-y-transition>
                                                <v-container v-if="active"  class="text-start">
                                                    <v-card height="200" width="250" class="primary white--text">
                                                        <v-card-title>
                                                            <h3 class="title">{{site.name}}</h3>
                                                        </v-card-title> 
                                                        <v-card-text class="pa-0 pl-8">
                                                            <p class="subtitle_1 white--text">{{site.description}}</p>
                                                        </v-card-text>       
                                                        <v-card-actions>
                                                            <v-btn fab text :href="site.url" target="_blank">
                                                                <v-icon large color="white">mdi-earth</v-icon>
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-container>
                                            </v-scroll-y-transition>
                                        
                                        </v-img>
                                        
                                    </v-card>
                                </v-item>
                                </v-col>
                            </v-row>
                        </v-item-group>
                    </v-container>
                </div>`,
    data() {
        return {
            sites:[
                {
                    name: 'Nissan',
                    description:'Fabrica de Autos',
                    url:'https://www.nissan.co.jp/BRAND/PAVILION/',
                    pic: '/imagenes/nissan.png'
                },
                {
                    name:'Right Hemisphere',
                    description: 'Estudio de diseño grafico',
                    url: 'https://www.righthemisphere.in/',
                    pic: '/imagenes/right.png'
                },
                {
                    name:'Peak',
                    description: 'Social drinks without the hangover',
                    url: 'https://getpeak.social/',
                    pic: '/imagenes/peak.png'
                },
                {
                    name:'Nanna Lagerman',
                    description: 'Creative studio specializing',
                    url: 'https://nannalagerman.com/',
                    pic: '/imagenes/nanna.png'
                },
            ]
        }
    },
}

let Contact = {
    template: ` <div>
                    <div class="flap contact"></div>
                    <v-container class="text-center">
                        <h2><span class="head">
                            CONTACTO
                        </span></h2>
                        <v-row>
                            <v-col md="6">
                                <v-form>
                                    <v-text-field
                                    label="Nombre"
                                    required
                                ></v-text-field>
                                    <v-text-field
                                    label="Email"
                                    required
                                ></v-text-field>
                                    <v-text-field
                                    label="Telefono"
                                    required
                                ></v-text-field>
                                    <v-textarea
                                    label="Consulta">
                                    </v-textarea>
                                    <v-btn color="primary">Enviar</v-btn>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>`
}

let Footer = {
    template: ` 
                    <v-footer color="#434444" id="footerfox">
                        <div class="flap footer"></div>
                        <v-container color="#434444" flat>
                            <v-row justify="start">
                                <v-col md="2">
                                    <v-img height="150" width="125" :src="pic"></v-img>
                                </v-col>
                                <v-col md="5">
                                    <v-list-item v-for="social in socials" :key="social.name">
                                        <v-btn fab text color="#DB3D4B" :href="social.href" target="_blank">
                                            <v-icon>{{social.icon}}</v-icon>
                                        </v-btn>
                                        <h6><span class="pa-2 white--text">{{social.name}}</span></h6>
                                    </v-list-item>
                                </v-col>
                                <v-col md="5">
                                    <v-list-item v-for="dato in datos" :key="dato.name">
                                            <v-icon class="pa-4" color="#DB3D4B">{{dato.icon}}</v-icon>
                                        <h6><span class="pa-2 white--text">{{dato.name}}</span></h6>
                                    </v-list-item>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-footer>`,
    data() {
        return {
            socials : [
                { 
                    name: 'FoxLabAR',
                    icon: 'mdi-github',
                    href: 'https://github.com/FoxLabAR'
                },
                {
                    name: '@_FoxLab_',
                    icon: 'mdi-instagram',
                    href : 'https://www.instagram.com/kobouharriet/'
                },
                {
                    name: 'FoxLab/',
                    icon: 'mdi-facebook',
                    href: 'https://www.facebook.com/kbarrozo'
                }
            ],
            datos: [
                {
                    name:'Lima, Buenos Aires',
                    icon: 'navigation'
                },
                {
                    name: 'info@foxlabs.com',
                    icon: 'mdi-email'
                },
                {
                    name: '(+54) 9 3487-511581',
                    icon: 'mdi-phone'
                }
            ],
            pic: './imagenes/fox_small.png'
        }
    },
}

new Vue({
        el:'#app',
        vuetify: new Vuetify({
            theme:{
                themes:{
                    light:{
                        primary: '#FF9800',
                        secondary: '#EB5627',
                        accent: '#FABB1B'
                    }
                }
            }
        }),
        components: {
            'app_bar': AppBar,
            'home': Home,
            'team': Team,
            'ourjobs' : OurJobs,
            'Contact' : Contact,
            'footerfox' : Footer
        }
})
