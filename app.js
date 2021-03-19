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
        }
})
