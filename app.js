let AppBar = {
    template: ` <div>
                    <v-app-bar class="primary flat">
                        <v-avatar 
                            tile
                            size="60">
                            <v-img :src='pic' 
                                max-width="60" 
                                max-height="50"
                                id="logo"></v-img>
                        </v-avatar>
                        <v-spacer></v-spacer>  
                        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    </v-app-bar>
                    <v-navigation-drawer
                        v-model="drawer"
                        absolute
                        right
                        class="accent"
                        width="30%">
                        <v-list
                            nav
                            dense>
                            <v-list-item-group
                                v-model="group"
                                color="white">
                                <v-list-item v-for="title in titles" :key="title">
                                    {{title}}
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-navigation-drawer>
                </div>`,
    data() {
        return {
            titles: [
                'Inicio',
                'Somos',
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
    template: `<div></div>`
}



new Vue({
        el:'#app',
        vuetify: new Vuetify({
            theme:{
                themes:{
                    light:{
                        primary: '#F68E1F',
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
