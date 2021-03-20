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
                    <div class="flap_team"></div>
                    <v-container fluid class="text-center">
                                <h2><span class="team_title">
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
        }
})
