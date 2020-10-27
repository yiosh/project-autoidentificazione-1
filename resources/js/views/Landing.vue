<template>
    <v-card class="mx-auto" max-width="500" :elevation="elevation">
        <v-toolbar color="#f2f2f2" light elevation="0">
            <v-toolbar-title class="mx-auto">
                <strong style="color: #150b48"
                    >AUTOIDENTIFICAZIONE</strong
                ></v-toolbar-title
            >
        </v-toolbar>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col>
                        <p>
                            GILUPI SRL deve effettuare la corretta verifica
                            della tua infentità come previsto dalle disposizioni
                            vigenti in materia. L'autoidentificazione consiste
                            nel caricamento di un documento di identità e di un
                            selfie con lo stesso. Dovrai fornire il tuo
                            indirizzo E-mail ed il tuo numero di cellulare. Non
                            è necessario essere presente in un nostro Punto
                            Vendita per la validazione del tuo account.
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                            ref="landingBtn"
                            color="#1eaa03"
                            block
                            dark
                            large
                            :to="{ name: 'StepOne' }"
                            ><strong>INIZIA</strong></v-btn
                        >
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
import EventBus from "../eventbus";

export default {
    created() {
        this.increment();
    },
    mounted() {
        EventBus.$on("landingsubmit", () => {
            this.$refs.landingBtn.$el.click();
        });
    },
    computed: {
        elevation() {
            if (this.$vuetify.breakpoint.smAndDown) {
                return 0;
            }
            return 2;
        }
    },
    methods: {
        increment() {
            console.log("increment");
            this.$store.commit("increment");
        }
    }
};
</script>
