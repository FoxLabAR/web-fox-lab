let Story = {
    template: ` <div>
                    <v-container>
                        <v-row justify="center">
                            <v-col>
                                <span class="title">
                                    <h2>SOBRE NOSOTROS</h2>
                                </span>  
                            </v-col>
                        </v-row>
                        <v-row
                        align="center"
                        justify-lg="center"
                        >
                            <v-col
                            sm="6"
                            md="4">
                                <v-card flat>
                                    <v-card-title>
                                        <h3>Que Hacemos</h3>
                                    </v-card-title>
                                    <v-card-text>
                                        <h3></h3>
                                    </v-card-text >
                                    <v-row justify="center" align="center">
                                        <v-col cols="6">
                                            Disenamos tu pagina web o incluso tu portafolio!
                                        </v-col>
                                        <v-col cols="6">
                                            <v-img id="pic_1" src="./imagenes/resume.png"></v-img>
                                            <v-img  height="100" widht="50" src="./imagenes/Portfolio.png"></v-img>
                                        </v-col>
                                    </v-row>
                                    
                                    <v-card-text >
                                        <h3></h3>
                                    </v-card-text>
                                    <v-img src="./imagenes/Article.png"></v-img>
                                    <v-img src="./imagenes/confirmed.png"></v-img>
                                    <v-card-text >
                                        <h3></h3>
                                    </v-card-text>
                                    <v-img src="Web-devices.png"
                                </v-card>
                            </v-col>
                            <v-col
                            md="4"
                            sm="6">
                                <v-img id="pic_fox" :src="pic"></v-img>
                            </v-col>
                            <v-col
                            sm="12"
                            md="4">
                                <v-card flat>
                                    <v-card-title>
                                        <h3>Quienes Somos</h3>
                                    </v-card-title>
                                    <v-card-text>

                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>`,
    data () { return{
        pic: './imagenes/fox1.png'
    }
}
}

new Vue({
                    el:'#app',
                    components:{
                        'story': Story

                    },
                    vuetify: new Vuetify({
                        theme:{
                            themes:{
                                light:{
                                    primary: '#FF9800',
                                    secondary: '#EB5627',
                                    accent: '#FABB1B',
                                }
                            }
                        }
                    }),
    })